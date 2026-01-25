import express from 'express';
import Booking from '../models/Booking.js';

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

export default router;
