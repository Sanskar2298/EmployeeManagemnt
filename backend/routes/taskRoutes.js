import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  createTask,
  getTasks,
  getTaskById,
  getMyTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();


router.use(protectRoute);
router.get("/ping", (req, res) => {
  console.log("✅ /api/tasks/ping hit");
  res.send("pong");
});




router.route("/")
  .post(createTask)   // Create a new task
  .get(getTasks);
// Get all tasks
router.get("/my", getMyTasks);
// Route: /api/tasks/:id
router.route("/:id")
  .get(getTaskById)   // Get single task by ID
  .put(updateTask)    // Update task
  .delete(deleteTask);// Delete task

export default router;
