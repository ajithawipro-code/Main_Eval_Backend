import { supabase } from "../supabaseClient.js";

export const addVehicle=async(req,res)=>{

const {name, registration_number, allowed_passengers, isAvailable,owner_id,rate_per_km}=req.body;

const{data:owner, error:existError} = await supabase.from("owner_12")
                                                    .select()
                                                    .eq("id",owner_id);
if(existError)
{
    return res.status(500).json({error:existError.message});
}
if(!owner || owner.length===0)
{
    return res.status(404).json({message: "Owner not available for the vehicle"});
}
const{data, error} = await supabase.from("vehicles")
                                   .insert([{name, registration_number,allowed_passengers,isAvailable,rate_per_km}])
                                   .select();

if(error)
{
    return res.status(500).json({error: error.message});
}

return res.status(201).json({message:"Vehicle added successfully"});                                            

};

export const updateVehicle= async(req,res)=>{

    const{vehicleId} = req.params;

    const {owner_id} = req.body;

    const{data :exist,error:existError} = await supabase.from("owner_12")
                                                         .select()
                                                         .eq("id", owner_id);

    if(existError)
    {
        return res.status(500).json({error: existError.message});
    }
    if(!exist || exist.length===0)
    {
        return res.status(404).json({message: "Owner not found --- cannot assign driver"});
    }

    const{data,error } = await supabase.from("vehicles")
                                       .update({driver_id:exist[0].id})
                                       .eq("id",vehicleId)
                                       .select();
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    return res.status(200).json({message: "Assigned Driver", data});
};

export const getVehicle=async(req,res)=>{

    const{data, error} = await supabase.from("vehicles")
                                       .select()
                                       .eq("id",vehicleId);
    if(error)
    {
        return res.status(500).json({error:error.message});
    }
    if(!data || data.length===0)
    {
        return res.status(404).json({message:"Vehicle not found"});
    }
    return res.status(200).json({message:"All vehicles details", data});

};