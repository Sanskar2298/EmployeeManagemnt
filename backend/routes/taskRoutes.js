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
  .post(createTask)   
  .get(getTasks);

router.get("/my", getMyTasks);

router.route("/:id")
  .get(getTaskById)   
  .put(updateTask)    
  .delete(deleteTask);

export default router;
