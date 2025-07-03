const Task = require('../models/task.model');

exports.create = (data) => Task.create(data);
exports.findAll = () => Task.find();
exports.findById = (id) => Task.findById(id);
exports.update = (id, data) => Task.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Task.findByIdAndDelete(id);
exports.removeAll = () => Task.deleteMany();