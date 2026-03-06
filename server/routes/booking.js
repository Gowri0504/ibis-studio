import express from 'express';
import Booking from '../models/Booking.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, serviceType, date, time, message } = req.body;
    const newBooking = new Booking({
      name,
      phone,
      serviceType,
      date,
      time,
      message
    });
    const savedBooking = await newBooking.save();
    console.log('Booking created:', savedBooking._id);
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all bookings (for admin - optional for now)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get bookings for the logged-in user (matched by phone)
router.get('/mine', requireAuth, async (req, res) => {
  try {
    const phone = req.user.phone;
    const bookings = await Booking.find({ phone }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit a review for a booking (user)
router.patch('/:id/review', requireAuth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    if (booking.phone !== req.user.phone) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    booking.userReview = {
      rating: Number(rating) || 5,
      comment: String(comment || ''),
      createdAt: new Date(),
    };
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
