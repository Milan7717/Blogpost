import { Router } from "express";
import { getAllUsers, loginUser, registerUser } from "../controller/authController.js";

const authRoute = Router();
authRoute.post("/register", registerUser);
authRoute.get("/", getAllUsers);


authRoute.post("/login",loginUser);

export { authRoute };
