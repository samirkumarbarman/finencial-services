import authService from "../services/authService.js";

//Register
export const register = async(req, res) =>{
    try {
        const {username, email, mobile, password, role} = req.body;
        const user = await authService.register(username,email, password, mobile, role);
        res.status(200).json(user); 
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

//Login
export const login = async (req, res) =>{
    try {
        const {email, password} =req.body;
        const {user, token} = await authService.login(email, password);
        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error :error.message});
    }
};