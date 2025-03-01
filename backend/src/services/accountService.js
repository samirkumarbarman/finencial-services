import Account from "../models/accountModel.js";

//Get account By User Id 
export const getAccountById = async(userId) =>{
    const account = await Account.findOne(userId);
    if (!account){
        throw new error ("Account not found");
    }
    return account;
};

//Update Account balance
export const updateAccountBalance = async (userId, balance) =>{
    const account = await Account.findOneAndUpdate(
        { userId },
        { $inc :{balance : amount} },
        { new : true, runValidators : true }
    );
    if (!account){
        throw new error("Account not found");
    }
    return account;
};