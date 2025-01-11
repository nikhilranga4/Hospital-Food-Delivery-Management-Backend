import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Instead of comparing passwords and generating a token, we directly compare the input password.
    // (For testing purposes, replace this with actual password checking logic if needed)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // For simplicity, we're skipping the token creation process
    res.json({ message: 'Login successful', role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
