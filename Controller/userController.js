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