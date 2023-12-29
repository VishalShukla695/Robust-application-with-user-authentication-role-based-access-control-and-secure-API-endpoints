
const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.use('/auth', authController);
router.use('/user', authenticateToken, userController);

module.exports = router;
