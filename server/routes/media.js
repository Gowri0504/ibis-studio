import express from 'express';
import Media from '../models/Media.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// User: list own media
router.get('/mine', requireAuth, async (req, res) => {
  try {
    const items = await Media.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
