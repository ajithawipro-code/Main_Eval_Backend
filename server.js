import express from "express";
import dotenv from "dotenv";
import { checkDB } from "./supabaseClient.js";
import { userRoute } from "./routes/user.route.js";
import { vehicleRoute } from "./routes/vechicle.route.js";
import { customerRoute } from "./routes/customer.route.js";

const app=express()
dotenv.config();

const PORT=process.env.PORT;


app.use("/users",userRoute);
app.use("/vehicles",vehicleRoute);
app.use("/trips",customerRoute);

checkDB();

app.listen(PORT,()=>{

    console.log(`Server running in port ${PORT}`);

});