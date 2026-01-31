import express from "express";
import { Limiter } from "../middlewares/rateLimiter.middleware.js";

import { addVehicle, getVehicle, updateVehicle } from "../controllers/vehicle.controller.js";

export const vehicleRoute= express.Router();

vehicleRoute.post("/add", Limiter, addVehicle);

vehicleRoute.patch("/assign-driver/:vehicleId",updateVehicle);


vehicleRoute.get("/:vehicleId", getVehicle);