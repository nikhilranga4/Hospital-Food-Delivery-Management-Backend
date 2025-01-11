import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  diseases: [String],
  allergies: [String],
  roomNumber: {
    type: String,
    required: true
  },
  bedNumber: {
    type: String,
    required: true
  },
  floorNumber: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  contactInformation: String,
  emergencyContact: String,
  additionalDetails: String
}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);