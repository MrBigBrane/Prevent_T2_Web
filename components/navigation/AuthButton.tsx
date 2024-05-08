'use server';

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import MuiMenu from '../buttons/avatar/MuiMenu'

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', user?.id) 

  let profiles;
  data?.map((row) => {
    profiles = row;
  })

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const createNewAccount = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login/signup");
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.user_metadata.first_name} {user.user_metadata.last_name}!
      <MuiMenu name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`} logout={signOut} profile={profiles}/>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-green-600 hover:bg-green-700 text-white hover:text-white"
    >
      Login
    </Link>
  );
}
