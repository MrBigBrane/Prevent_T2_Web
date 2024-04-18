'use server';

import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";


export default async function NavBar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        {/* <Link href={user ? "/lifestylelog" : "/login"}>Weekly Log</Link>
          <Link href={user ? "/coach" : "/login"}>Coach Log</Link> */}
        <Link href="/">Home</Link>
        <Link href="lifestylelog">Weekly Logger</Link>
        <Link href="activitylog">Add Activities</Link>
        <Link href="coach">Coach Log</Link>
        <Link href="activities">Activity Logs</Link>
        <AuthButton />
      </div>
    </nav>
  );
  
}
