'use server';

import AuthButton from "../components/AuthButton";
import fetchCoach from './serverfunctions/coach/fetchCoach';
import fetcher from "./serverfunctions/fetcher";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";


export default async function NavBar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  
  let userClassCopy = Object.assign({}, await fetcher('profiles', 'user'));

  let coachCopy = Object.assign({}, await fetchCoach('coach_codes'));


  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        {/* <Link href={user ? "/lifestylelog" : "/login"}>Weekly Log</Link>
          <Link href={user ? "/coach" : "/login"}>Coach Log</Link> */}
        <Link href="/">Home</Link>
        <Link href={user ? "/dashboard" : "/login"}>User Dashboard</Link>
        {coachCopy[0] ? (
          <Link href="/dashboard/coaches">Coaches Dashboard</Link>
         ) : ( 
          <Link href={user ? "/dashboard/becomecoach" : "/login"}>Become a Coach</Link>
        )}
        {userClassCopy[0] ? (
          <Link href="/dashboard/yourcoach">Your Class</Link>
        ) : (
          <Link href={user ? "/dashboard/joinclass" : "/login"}>Join a Class</Link>
        )}
        
        
        <AuthButton />
      </div>
    </nav>
  );
  
}
