const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

// get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// create task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// get single task
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }

  res.status(200).json({ task });
});

// delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }

  res.status(200).json({ task });
});

// update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `no task with id ${taskID}` });
  }

  res.status(200).json({ task });
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };