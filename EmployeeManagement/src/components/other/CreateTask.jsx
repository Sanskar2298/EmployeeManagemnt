import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateTask = ({ onTaskCreated }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/employees", {
        withCredentials: true,
      });
      setEmployees(res.data.employees);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const handleSubmit = async (e) => {
    console.log("📤 Submitting task with:", form);

    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/tasks", form, {
        withCredentials: true,
      });
      alert("Task created!");
      onTaskCreated && onTaskCreated(res.data.task);
      setForm({ title: "", description: "", assignedTo: "", dueDate: "" });
    } catch (err) {
      console.error("Create task error:", err.response?.data?.error);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task title"
        required
        className="border p-2 w-full"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Task description"
        className="border p-2 w-full"
      />
      <select
        name="assignedTo"
        value={form.assignedTo}
        onChange={handleChange}
        required
        className="border p-2 w-full bg-[#1c1c1c]"
      >
        <option value="">Select employee</option>
        {employees.map((emp) => (
          <option key={emp._id} value={emp._id}>
            {emp.fullName}
          </option>
        ))}
      </select>
      <input
        name="dueDate"
        type="date"
        value={form.dueDate}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
        Create Task
      </button>
    </form>
  );
};

export default CreateTask;