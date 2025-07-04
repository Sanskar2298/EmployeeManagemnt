import mongoose from "mongoose";

const connectionToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            
        });
        console.log('MongoDB connected');
    } catch(error) {
        console.log("MongoDB connection failed:",error.message);
        process.exit(1);
    }
};



export default connectionToMongoDB;