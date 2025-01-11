import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import patientRoutes from './routes/patients.js';
import dietChartRoutes from './routes/dietCharts.js';
import deliveryRoutes from './routes/deliveries.js';

dotenv.config();

const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: [
    'http://localhost:8080',  // Add the correct frontend URL if running locally
    'http://localhost:5173',  // If you're using Vite for frontend
    'https://973afac4-950c-4701-a6e1-2bd9230458bd.lovableproject.com',  // Your deployed frontend URL
    process.env.FRONTEND_URL // Additional frontend URL from environment variables (if any)
  ].filter(Boolean),  // Filters out any empty or undefined origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/diet-charts', dietChartRoutes);
app.use('/api/deliveries', deliveryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
