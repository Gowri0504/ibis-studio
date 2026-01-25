import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const requireAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const payload = jwt.verify(token, secret);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user?.role === 'admin') return next();
  return res.status(403).json({ error: 'Forbidden' });
};
