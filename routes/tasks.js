const express = require('express');
const router = express.Router();

const v1TasksRoutes = require('./v1/tasks');

router.use('/v1',v1TasksRoutes);


module.exports = router;