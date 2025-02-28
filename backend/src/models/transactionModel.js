import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    fromUserId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },

    toUserId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },

    amount :{
        type : Number,
        required : true,
    },

    status :{
        type : String,
        enum : ['pending', 'completed', 'failed'],
        default : 'pending'
    },
}, { timestamps : true });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;