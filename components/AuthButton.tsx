'use server';

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import MuiMenu from './buttons/avatar/MuiMenu'

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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
      <MuiMenu name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`} logout={signOut} />
      {/* <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form> */}
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
