import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();


export const supabase= createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

export const checkDB=async()=>{

  const {error} = await supabase.from("owner_12").select("*").limit(1);

  if(error)
  {
    console.log("DB Not connected");
    return false;
  }
  console.log("DB connected successfully");
  return true;

} 
