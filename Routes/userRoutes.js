import { createrUserController, deleteUserController, getALLUsersController, updateUserPasswordController } from "../Controller/userController.js";

import express from "express"

const userRoute = express.Router();

userRoute.post("/signup", createrUserController);
userRoute.get("/getusers", getALLUsersController);
userRoute.put("/updatepassword/:id", updateUserPasswordController);
userRoute.delete("/deleteuser/:id", deleteUserController)

export default userRoute;