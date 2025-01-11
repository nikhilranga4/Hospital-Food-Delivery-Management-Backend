import express from 'express';
import DietChart from '../models/DietChart.js';

const router = express.Router();

// Get all diet charts
router.get('/', async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate('patientId');
    res.json(dietCharts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching diet charts' });
  }
});

// Create new diet chart
router.post('/', async (req, res) => {
  try {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.status(201).json(dietChart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating diet chart' });
  }
});

// Get diet chart by ID
router.get('/:id', async (req, res) => {
  try {
    const dietChart = await DietChart.findById(req.params.id).populate('patientId');
    if (!dietChart) {
      return res.status(404).json({ message: 'Diet chart not found' });
    }
    res.json(dietChart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching diet chart' });
  }
});

// Update diet chart
router.put('/:id', async (req, res) => {
  try {
    const dietChart = await DietChart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dietChart) {
      return res.status(404).json({ message: 'Diet chart not found' });
    }
    res.json(dietChart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating diet chart' });
  }
});

// Delete diet chart
router.delete('/:id', async (req, res) => {
  try {
    const dietChart = await DietChart.findByIdAndDelete(req.params.id);
    if (!dietChart) {
      return res.status(404).json({ message: 'Diet chart not found' });
    }
    res.json({ message: 'Diet chart deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting diet chart' });
  }
});

export default router;