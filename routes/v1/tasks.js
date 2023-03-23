const express = require('express');
const router = express.Router();
const { createTask, destroyTask, getTask, updateTask, getAllTasks } = require('../../controllers/tasks');

router.post('/tasks/', createTask);
router.get('/tasks',getAllTasks);
router.get('/tasks/:id',getTask);
router.patch('/tasks/:id',updateTask);
router.delete('/tasks/:id',destroyTask);


module.exports = router;
