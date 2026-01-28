import { createrUserController } from "../Controller/userController.js";

import express from "express"

const userRoute = express.Router();

userRoute.post("/signup", createrUserController);

export default userRoute;