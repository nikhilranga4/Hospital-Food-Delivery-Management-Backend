import express from 'express';
import Delivery from '../models/Delivery.js';

const router = express.Router();

// Get all deliveries
router.get('/', async (req, res) => {
  try {
    const deliveries = await Delivery.find()
      .populate('patientId')
      .populate('dietChartId');
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deliveries' });
  }
});

// Create new delivery
router.post('/', async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json(delivery);
  } catch (error) {
    res.status(400).json({ message: 'Error creating delivery' });
  }
});

// Get delivery by ID
router.get('/:id', async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id)
      .populate('patientId')
      .populate('dietChartId');
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.json(delivery);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching delivery' });
  }
});

// Update delivery status
router.put('/:id', async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }
    res.json(delivery);
  } catch (error) {
    res.status(400).json({ message: 'Error updating delivery' });
  }
});

export default router;