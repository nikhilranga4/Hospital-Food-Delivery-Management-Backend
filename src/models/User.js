import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique in the database
    trim: true,   // Remove leading/trailing whitespace
  },
  password: {
    type: String,
    required: true, // Password is mandatory
  },
}, {
  timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
});

// Create the model and export it
const User = mongoose.model('User', userSchema);

export default User;
