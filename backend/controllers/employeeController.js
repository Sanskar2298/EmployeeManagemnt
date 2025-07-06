import User from "../models/UserModel.js";

// Create an employee (called during signup, so optional)
export const createEmployee = async (req, res) => {
  try {
    const { fullName, username, password, position } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new User({
      fullName,
      username,
      password: hashedPassword,
      role: "employee",
      position,
    });

    await newEmployee.save();

    res.status(201).json({ message: "Employee created successfully" });
  } catch (err) {
    console.error("Create employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Get all employees (Main culprit for your 500 error)
export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" }); // Only users with employee role
    res.status(200).json({ employees });
  } catch (err) {
    console.error("Get employees error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get single employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id);
    if (!employee || employee.role !== "employee") {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ employee });
  } catch (err) {
    console.error("Get employee by ID error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Update employee
export const updateEmployee = async (req, res) => {
  try {
    const { fullName, position } = req.body;

    const updatedEmployee = await User.findByIdAndUpdate(
      req.params.id,
      { fullName, position },
      { new: true }
    );

    if (!updatedEmployee || updatedEmployee.role !== "employee") {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.status(200).json({ message: "Employee updated", employee: updatedEmployee });
  } catch (err) {
    console.error("Update employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete employee
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await User.findByIdAndDelete(req.params.id);
    if (!employee || employee.role !== "employee") {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    console.error("Delete employee error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
