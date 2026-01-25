import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'Pending' },
  adminResponse: { type: String },
  respondedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
