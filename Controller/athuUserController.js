import { hashPassword,  passwordCheck  } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthUserModel from "../Model/authUserModel.js";


export const authSignup = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const checkEmail = await AuthUserModel.userLoginModel(email);
        if(checkEmail){
            return res.status(400).json({message: "Email already exists"})
        }
        const newPassword = await hashPassword(password);
        const createUser = await AuthUserModel.userSignupModel(
            {name,
             email, 
             password: newPassword, 
             role: role || user
            })
        if (createUser) {
        res.status(201).json({message: "User has been created"})
        }
        else {
         res.status(500).json({message: "User has not been created"})
        }
    } catch(error){
        res.status(500).json({message: error.message})
    }
}
export const authLogin = async (req, res) => {
    try {
        const { email, password} = req.body
        const user = await AuthUserModel.userLoginModel(email);
        if (!user) {
            return res.status(400).json({message: "Invalid credentials"})
        }
        const userPassword = await  passwordCheck (password, user.password);
        if (!userPassword) {
            return res.status(400).json({
                message: "Wrong password"
            })
        }
        const token = createToken({
            id: user.id,
            role: user.role
        })
        res.status(200).json({message: "Login successful", token})
    } 
    catch(error){
        res.status(500).json({message: error.message})
    } 

}