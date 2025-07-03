const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');
<<<<<<< HEAD
const { taskValidationRules, validate } = require('../middlewares/validateTask');

router.post('/create', taskValidationRules, validate, controller.createTask);

router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTask);
router.put('/:id', taskValidationRules, validate, controller.updateTask);
router.delete('/:id', controller.deleteTask);


=======

router.post('/create', controller.createTask);
router.get('/', controller.getAllTasks);
router.get('/:id', controller.getTask);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

>>>>>>> taskmanager/main
module.exports = router;
