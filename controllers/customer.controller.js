import { supabase } from "../supabaseClient.js";

export const createVehicle=async(req,res)=>{

    const{customer_id, vehicle_id, start_date, end_date, location, distance_km,passengers,tripCost,isCompleted} = req.body;

    const {data:vehicle,error:existError} = await supabase.from("vehicles")
                                       .select()
                                       .eq("id",vehicle_id);
                                    
    if(error)
    {
        return res.status(500).json({error:existError.message});
    }

    if(!vehicle)
    {
        return res.status(404).json({message: "vehicle not found"});
    }

    const {data,error} = await supabase.from("customers_12")
                                       .insert([{customer_id, vehicle_id,start_date,end_date,location,distance_km,passengers,tripCost,isCompleted}])
                                       .select();
    if(error)
    {
            return res.status(500).json({error:error.message});
    }
    return res.status(201).json({message:"Trip created successfully"});
};


export const getCustVehicle=async(req,res)=>{

    const {tripId} = req.params;

    const{data,error} = await supabase.from("customers_12")
                                     .select()
                                    .eq("id",tripId);


    if(error)
    {
        return res.status(500).json({error: error.message});
    }
    return res.status(200).json({message: "All trips of the customer",data});
};

export const updateCustVehicle = async(req,res)=>{

    const {tripId} = req.params;

    const{vehicle_id} = req.body;

    const {start_date,end_date,location,distance_km,passengers} = req.body;

    const {data:exist, error:existError} = await supabase.from("vehicles")
                                                         .select()
                                                         .eq("id",vehicle_id);

    if(existError)
    {
        return res.status(500).json({error:existError.message});
    }
    if(!exist)
    {
        return res.status(404).json({message:"No found cusotmer"});
    }

    const{data,error} = await supabase.from("customers_12")
                                      .update({start_date,end_date,location,distance_km,passengers, vehicle_id:exist[0].id})
                                      .eq("id",tripId)
                                      .select();
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    return res.status(200).json({message:"Trip updated successfully", data});


};

export const deleteCustVehicle=async(req,res)=>{

    const {tripId} = req.params;
    const {vehicle_id} = req.body;

    const {data:exist, error:existError} = await supabase.from("vehicles")
                                                         .select()
                                                         .eq("id",vehicle_id);

    if(existError)
    {
        return res.status(500).json({error:existError.message});
    }
    if(!exist)
    {
        return res.status(404).json({message:"Not found customer"});
    }

    const{data,error} = await supabase.from("customers_12")
                                      .delete()
                                      .eq("id",tripId)
                                      .select();
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    return res.status(200).json({message:"Trip deleted successfully", data});


};