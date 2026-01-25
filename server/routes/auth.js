import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already registered' });
    const passwordHash = await bcrypt.hash(password, 10);
    const role = email === 'admin@ibis.local' ? 'admin' : 'user';
    const user = await User.create({ name, email, phone, passwordHash, role });
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
