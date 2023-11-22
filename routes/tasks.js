const express = require("express");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks).post("/", createTask);
router
  .get("/:id", getTask)
  .patch("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = router;
