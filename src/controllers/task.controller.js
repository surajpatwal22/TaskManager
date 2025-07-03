const taskService = require('../services/task.service');

// CREATE
exports.createTask = async (req, res, next) => {
  try {
    const task = await taskService.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// READ ALL
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.findAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// READ ONE
exports.getTask = async (req, res, next) => {
  try {
    const task = await taskService.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.updateTask = async (req, res, next) => {
  try {
    const task = await taskService.update(req.params.id, req.body);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await taskService.remove(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};
