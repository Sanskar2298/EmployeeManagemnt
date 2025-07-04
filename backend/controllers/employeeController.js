// controllers/employeeController.js
import Employee from "../models/EmployeeModel.js"

// Create a new employee
export const createEmployee = async (req, res) => {
  try {
    const { fullName, email, position } = req.body;

    // Check for required fields
    if (!fullName || !email || !position) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Prevent duplicate emails
    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const employee = new Employee({ fullName, email, position });
    await employee.save();

    res.status(201).json({ message: "Employee created", employee });
  } catch (err) {
    console.error("Create employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate("tasks");
    res.status(200).json({ employees });
  } catch (err) {
    console.error("Get employees error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id).populate("tasks");
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ employee });
  } catch (err) {
    console.error("Get employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update an employee
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const employee = await Employee.findByIdAndUpdate(id, updates, { new: true });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated", employee });
  } catch (err) {
    console.error("Update employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    console.error("Delete employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
