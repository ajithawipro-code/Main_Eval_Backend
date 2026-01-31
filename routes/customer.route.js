import express from "express";
import { supabase } from "../supabaseClient.js";
import { createVehicle, getCustVehicle, updateCustVehicle,deleteCustVehicle } from "../controllers/customer.controller.js";


export const customerRoute=express.Router();

customerRoute.post("/create", createVehicle);


customerRoute.get("/trips/:tripId", getCustVehicle);

customerRoute.patch("/update/:tripId", updateCustVehicle );

customerRoute.delete("delete/:tripId", deleteCustVehicle);

