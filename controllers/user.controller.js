import { supabase } from "../supabaseClient.js";

export const userSignup=async(req,res)=>{

    console.log("comnes here");

    const { name,email, password,role } = req.body;

    console.log("comes here")

    console.log(name);

    const{data:exist, error:existError} = await supabase.from("owner_12")
                                                        .select()
                                                        .eq("email", email)
                                                        .maybeSingle();
    if(existError)
    {
        return res.status(500).json({error:existError.message});
    }
    if(exist)
    {
        return res.status(409).json({message:"Email already registered"});
    }
     
    const{data,error} = await supabase.from("owner_12")
                                       .insert([{name, email, password,role}])
                                       .select();
    if(error)
    {
        return res.status(500).json({error: error.message});
    }

    return res.status(201).json({message:"User signed up successfully", data})

}

export const getAnalytics=async(req,res)=>{

    const {data :customers, error} = await supabase.from(customers_12)
                                        .select("*")
    if(error)
    {
        return res.status(500).json({error:error.message});
    }

    const analytics = customers.reduce((acc, r)=>{
        acc.totalcustomers = acc.totalcustomers +r.id;

    });
return res.status(200).json({message: "Analytics", analytics});






}