import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SALT_ROUND = 10;

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },

    email :{
        type : String,
        required : [true, "email is required"],
        lowercase : true,
    },

    mobile :{
        type : Number,
        required : [true, "mobile number is required"],
    },

    password :{
        type : String,
        required : true,
        minLength : 5,
    },

    role :{
        type : String,
        enum : ['Gorib User', 'Borolok User'],
        required : true,
    },
}, { timestamps :true });

//Hash password before saving
userSchema.pre = ('save', async function (next){
    if (!this.isModified('password')){
        return next;
    }
    try {
        const salt = await bcrypt.genSalt(SALT_ROUND);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        next(error);
    }
});

//Compare Hash password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const User = mongoose.model ('User', userSchema);

export default User;