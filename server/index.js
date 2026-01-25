
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import fs from 'fs';
import path from 'path';
import bookingRoutes from './routes/booking.js';
import authRoutes from './routes/auth.js';
import mediaRoutes from './routes/media.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
const UPLOAD_DIR = path.resolve('uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
app.use('/uploads', express.static(UPLOAD_DIR));

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/admin', adminRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('IBIS Studio API is running');
});

async function connectDB() {
  const atlasUri = process.env.MONGO_URI;
  const localUri = 'mongodb://127.0.0.1:27017/ibis-studio';
  try {
    await mongoose.connect(atlasUri, { serverSelectionTimeoutMS: 10000 });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    try {
      await mongoose.connect(localUri, { serverSelectionTimeoutMS: 5000 });
      console.log('MongoDB Connected (local fallback)');
    } catch (err2) {
      console.error('Local MongoDB Connection Error:', err2);
    }
  }
}
async function ensureAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@ibis.com';
    const password = process.env.ADMIN_PASSWORD||'admin@ibis';
    if (!password) {
      console.log('ADMIN_PASSWORD not set; skipping admin seeding');
      return;
    }
    const existing = await User.findOne({ email });
    if (existing) {
      console.log('Admin user already exists');
      return;
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({
      name: 'Administrator',
      email,
      phone: '0000000000',
      passwordHash,
      role: 'admin'
    });
    console.log(`Seeded admin user: ${email}`);
  } catch (e) {
    console.error('Admin seeding error:', e);
  }
}

await connectDB();
await ensureAdmin();

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
