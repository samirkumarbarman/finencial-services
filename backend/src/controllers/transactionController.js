import transactionService from "../services/transactionService.js";

//Create Transaction
export const createTransaction = async (req, res) => {
    try {
        const {fromUserId, toUserId, amount} = req.body;
        const transaction = await transactionService.createTransaction(fromUserId, toUserId, amount);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

//Get Transaction by User Id
export const getTransactionsByUserId = async(req, res) =>{
    try {
        const transactions = await transactionService.getTransactionsByUserId(req.params.userId);
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};