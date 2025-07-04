import Task from "../models/TaskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, assignedTo, dueDate } = req.body;

    if (!title || !assignedTo) {
      return res.status(400).json({ error: "Title and assignedTo are required" });
    }

    const task = new Task({ title, description, status, assignedTo, dueDate });
    await task.save();

    res.status(201).json({ message: "Task created", task });
  } catch (err) {
    console.error("Create task error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo");
    res.status(200).json({ tasks });
  } catch (err) {
    console.error("Get tasks error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single task
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).populate("assignedTo");
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ task });
  } catch (err) {
    console.error("Get task error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task updated", task });
  } catch (err) {
    console.error("Update task error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    console.error("Delete task error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
