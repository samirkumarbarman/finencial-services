import Transaction from "../models/transactionModel.js";
import accountService from "./accountService.js"


const createTransaction = async (fromUserId, toUserId, amount) => {
    const fromAccount = await accountService.getAccountByUserId(fromUserId);
    if (fromAccount.balance < amount) {
        throw new Error('Insufficient balance');
    }

    const session = await Transaction.startSession();
    session.startTransaction();

    try {
        await accountService.updateAccountBalance(fromUserId, -amount);
        await accountService.updateAccountBalance(toUserId, amount);

        const transaction = new Transaction({
            fromUserId,
            toUserId,
            amount,
            status: 'completed',
        });
        await transaction.save();

        await session.commitTransaction();
        session.endSession();

        return transaction;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};

const getTransactionsByUserId = async (userId) => {
    const transactions = await Transaction.find({
        $or: [{ fromUserId: userId }, { toUserId: userId }],
    });
    return transactions;
};

export default {
    createTransaction,
    getTransactionsByUserId,
};