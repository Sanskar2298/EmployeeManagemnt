import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import taskRoutes from "./routes/taskRoutes.js"
import cookieParser from "cookie-parser";
import connectionToMongoDB from "./db/connectionToMongoDB.js";


dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("✅ API is Working");
});



app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
});


app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);


app.use("/api/tasks", taskRoutes);

app.get("/test", (req, res) => {
  res.send("✅ Test route working");
});


app.use((req, res, next) => {
    res.status(404).json({
        error: "Route not found",
        method: req.method,
        path: req.originalUrl,
    });
});




connectionToMongoDB().then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
});
