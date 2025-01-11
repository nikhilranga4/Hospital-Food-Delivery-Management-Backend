import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['manager', 'pantry', 'delivery'],
    required: true
  },
  name: String,
  contactInfo: String,
  location: String
}, { timestamps: true });

export default mongoose.model('User', userSchema);