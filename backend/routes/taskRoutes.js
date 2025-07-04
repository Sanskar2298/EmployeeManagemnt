import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

// Apply authentication middleware to all routes
router.use(protectRoute);

// Route: /api/tasks/
router.route("/")
    .post(createTask)   // Create a new task
    .get(getTasks);     // Get all tasks

// Route: /api/tasks/:id
router.route("/:id")
    .get(getTaskById)   // Get single task by ID
    .put(updateTask)    // Update task
    .delete(deleteTask);// Delete task

export default router;
