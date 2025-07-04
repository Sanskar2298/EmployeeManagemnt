import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        required: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }]
}, { timestamps: true });


const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;