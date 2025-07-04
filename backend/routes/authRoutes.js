import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js"
import { signup,login } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);

router.post('/signup',async(req,res)=>{
    try{
        const { username,fullName,password} = req.body;

        const existingUser = await User.findOne({username});
        if(existingUser) return res.status(400).json({msg:"User already exists"})

            const hashedPassword = await bcrypt.hash(password,10);

            const newUser = new User({username,fullName,password:hashedPassword})

            await newUser.save();

             const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

             res.status(201).json({token,user:{username,fullName}});
    } catch(error){
        res.status(500).json({msg:"Signup error",error: error.message});
    }
})


router.post('/login',async(req,res)=>{
    try {
        const {username,password} = req.body;

        const user = await User.findOne({username})
            if(!user) return res.status(400).json({msg:"Invalid Credentials"})

                const isMatch = await bcrypt.compare(password,user.password);
                if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"})


                    const token = jwt.sign({ id: user._id },
                        process.env.JWT_SECRET
                       , { expiresIn: "7d" });

                    res.status(200).json({ token, user: { username: user.username, fullName: user.fullName } });
  } catch (error) {
    res.status(500).json({ msg: "Login error", error: error.message });
  }
});

export default router;





