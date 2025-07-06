import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: { 
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'employee'],
    required: true,
  },
 
  position: String,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
