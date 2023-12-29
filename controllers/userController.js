
const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/profile', async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from the authenticated token

    // Find user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/profile', async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from the authenticated token
    const { name, profileImage } = req.body;

    // Update user details
    const updatedUser = await User.findByIdAndUpdate(userId, { name, profileImage }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/profile', async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from the authenticated token

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
