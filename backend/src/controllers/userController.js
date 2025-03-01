import userService from "../services/userService.js";

//Get user By id
export const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error : error.message});
    }
};

//Update user
export const updateUserById = async (req, res) => {
    try {
        const update = await userService.updateUserById(req.params.id, req.body);
        res.status(200).json(update);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};
