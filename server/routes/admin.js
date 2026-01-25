import express from 'express';
import Media from '../models/Media.js';
import User from '../models/User.js';
import Booking from '../models/Booking.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname || '');
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  }
});
const upload = multer({ storage });

// Admin: add media for a user (URL-based)
router.post('/media', requireAuth, requireAdmin, upload.single('file'), async (req, res) => {
  try {
    const { userEmail, title, url, type, driveLink } = req.body;
    const user = await User.findOne({ email: userEmail });
    if (!user) return res.status(404).json({ error: 'User not found' });
    let finalUrl = url;
    if (req.file) {
      finalUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    } else if (driveLink) {
      finalUrl = driveLink;
    }
    if (!finalUrl) return res.status(400).json({ error: 'Provide a file or a link' });
    let finalType = type;
    if (!finalType && req.file?.mimetype) {
      finalType = req.file.mimetype.startsWith('video') ? 'video' : 'image';
    }
    const item = await Media.create({ userId: user._id, title, url: finalUrl, type: finalType || 'image' });
    res.status(201).json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Admin: list users
router.get('/users', requireAuth, requireAdmin, async (req, res) => {
  try {
    const users = await User.find().select('name email phone role createdAt');
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Admin: list bookings
router.get('/bookings', requireAuth, requireAdmin, async (req, res) => {
  try {
    const items = await Booking.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Admin: respond/update booking
router.patch('/bookings/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { status, adminResponse } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, adminResponse, respondedAt: new Date() },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
