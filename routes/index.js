const express = require('express');
const authRoutes = require('./auth');
const taskRoutes = require('./tasks');
const userRoutes = require('./users');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;
