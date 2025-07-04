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
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());


const PORT = process.env.PORT || 3000;



app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);


app.use("/api/tasks", taskRoutes);



connectionToMongoDB().then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
});
