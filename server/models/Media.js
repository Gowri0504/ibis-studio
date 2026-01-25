import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], default: 'image' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Media', mediaSchema);
