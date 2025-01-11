import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  dietChartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DietChart',
    required: true
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  mealType: {
    type: String,
    enum: ['morning', 'evening', 'night'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'delivering', 'delivered'],
    default: 'pending'
  },
  deliveryNotes: String,
  deliveredAt: Date
}, { timestamps: true });

export default mongoose.model('Delivery', deliverySchema);