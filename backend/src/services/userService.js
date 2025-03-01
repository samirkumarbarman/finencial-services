import User from "../models/userModel.js";

//Get User by Id
export const getUserById = async (id) =>{
    const user = await User.findById(id);
    if (!user){
        throw new error("User not found");
    }
    return user;
};

//Update User
export const updateUserById = async (id, updateData) =>{
    const update = await User.findByIdAndUpdate(id, updateData, {new :true, runValidators: true});
    if (!update){
        throw new error("Update user not found");
    }
    return update;
};
