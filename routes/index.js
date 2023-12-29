
const express = require('express');
const apiRoutes = require('./apiRoutes');

const router = express.Router();

router.use('/api', apiRoutes);

module.exports = router;
