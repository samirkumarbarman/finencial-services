import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register new user
const register = async (username, email, mobile, password, role) => {
    const existUser = await User.findOne({email});
    if (existUser){
        throw new error ("User already exist");
    }
    const newUser = new User({username, email, mobile, password, role});
    await newUser.save();
    return newUser;
};

//Login User
const loginUser = async (email, password) =>{
    const user = await User.findOne({email});
    if (!user){
        throw new error("Invalid email or password");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch){
        throw new error("Incorrect Password");
    }
    const token = jwt.sign({ id:user._id, role:user.role}, process.env.JWT_SECRET, { expiresIn :'1h' });
    return {user, token};
};

export default {register, loginUser};