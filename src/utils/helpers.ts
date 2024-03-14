import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Check email is valid
export const validateEmail = (email: string) => {
    const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    if (regex.test(email)) {
        return true;
    }
    return false;
};


// Check user auth and role via server
// ONLY CALL VIA SERVER SIDE
export const getUserProfile = async(cookie: any) => {
    dotenv.config();

    // Initializes output
    const ret = {
        isSession: false,
        user: {},
        role: "",
    }

    // Extract env variables for Supabase
    const supabaseURL = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    // Connect to Supabase => Run Code
    if (supabaseURL && supabaseSecretKey){
        const supabaseServer = createClient(supabaseURL, supabaseSecretKey);

        // Get JWT
        const jwt = cookie.get("server-access-token")?.value;
        
        // Authenticate with Supabase
        const { data } = await supabaseServer.auth.getUser(jwt);

        // Structure result and get user profile
        if (data.user?.id){
            ret.isSession = true;
            ret.user = data.user;
            
            const { data: profile } = await supabaseServer.from("profiles").select("id, role").eq("id", data.user.id).limit(1);
            
            if (profile?.[0].role) {
                ret.role = profile[0].role;
            }

        }

    }

    // Return Result
    return ret;
};