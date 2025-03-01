import accountService from "../services/accountService.js";

//Get account By Id
export const getAccountById = async (req, res) => {
    try {
        const account = await accountService.getAccountById(req.params.userId);
        res.status(200).json(account);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};