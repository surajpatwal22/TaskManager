const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');

router.post('/create', controller.createTask);
router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;
