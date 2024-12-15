import express from "express";
import asyncHandler from "express-async-handler";
import validatedBody from "../middlewares/validateBody.js"
const router = express.Router();
 
import {login,register} from "../controllers/auth.controller.js";

import { userLoginSchema, userRegistrationSchema } from "../validation/auth.validation.js";
/* GET users listing. */
router.post("/register", validatedBody(userRegistrationSchema),asyncHandler(register));

router.post("/login", validatedBody(userLoginSchema), asyncHandler(login));

export default router
