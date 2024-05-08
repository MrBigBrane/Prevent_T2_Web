'use server';

import AuthButton from "./AuthButton";
import fetchCoach from '../serverfunctions/coach/fetchCoach';
import { createClient } from "@/utils/supabase/server";
import NavBar2 from "./NavBar2";
import { AppBar } from "@mui/material";


export default async function NavBar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let coachCopy = Object.assign({}, await fetchCoach('coach_codes'));


  return (
    <AppBar position="sticky" variant="contained" sx={{ width: "100%"}} color="success">
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      {/* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm"> */}
      
        <NavBar2 user={user} coachCopy={coachCopy} authButton={<AuthButton />}/>
        
        {/* <AuthButton /> */}
        
      {/* </div> */}
    </nav>
    </AppBar>
  );
  
}
