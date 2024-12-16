import express from "express";
import asyncHandler from "express-async-handler";
import { getAllVechile } from "../controllers/vechile.controller.js";
import verifyToken from "../middlewares/verifyToken.js";
import validateRequest from "../middlewares/validateBody.js";
import { VehicleSchema } from "../validation/vechile.validation.js";
const router = express.Router();

/* GET users listing. */
router.post(
  "/create",
  verifyToken,
  validateRequest(VehicleSchema),
  asyncHandler(getAllVechile)
);

export default router;
