import User from "../models/userModel.js";

//Get User by Id
const getUserById = async (id) =>{
    const user = await User.findById(id);
    if (!user){
        throw new error("User not found");
    }
    return user;
};

//Update User
const updateUserById = async (id, updateData) =>{
    const update = await User.findByIdAndUpdate(id, updateData, {new :true, runValidators: true});
    if (!update){
        throw new error("Update user not found");
    }
    return update;
};

export default {getUserById, updateUserById};