import UserModel from "../Model/userModel.js";

export const createrUserController = async (req, res) => {
    // nivi vvvvvv mmm
    try{
    const response = await UserModel.createUserModel(req.body);
    res.status(210).json({
        message: "User has been created",
        UserId: response
    })
}
    catch (err) {
        res.status(500).json({ error: err.message})
    }
}
// get all the users
export const getALLUsersController = async (req, res) => {
    try{
        const data = await UserModel.getALLUsersModel();
        res.json(data)
    }catch (err){
        res.status(500).json({ error: err.message})
    }
}
export const updateUserPasswordController = async (req, res)=> {
    try{
        const { password } = req.body;
        const updatePassword = await UserModel.updateUserPasswordModel(req.params.id, { password });
        if(!updatePassword) {
            res.status(404).json({ message: "User not found"});
        }
        else {
            res.json({ message: "password updated successfully"})
        }
    }catch (err){
        res.status(500).json({ error: err.message})
    }
}
export const deleteUserController = async (req, res)=> {
    try{
        const delte = await UserModel.deleteUserModel(req.params.id);
        if(!delte) {
            res.status(404).json({ message: "User not found"})
        }
        else {
            res.json({ message: "User has been deleted successfully"})
        }
    }catch (err){
        res.status(500).json({ error: err.message})
    }
}