import mongoose from 'mongoose';

const mealPlanSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['morning', 'evening', 'night'],
    required: true
  },
  ingredients: [String],
  instructions: [String],
  specialInstructions: String
});

const dietChartSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  mealPlans: [mealPlanSchema],
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  }
}, { timestamps: true });

export default mongoose.model('DietChart', dietChartSchema);