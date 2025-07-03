const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');
const { taskValidationRules, validate } = require('../middlewares/validateTask');

router.post('/create', taskValidationRules, validate, controller.createTask);

router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTask);
router.put('/:id', taskValidationRules, validate, controller.updateTask);
router.delete('/:id', controller.deleteTask);


module.exports = router;
