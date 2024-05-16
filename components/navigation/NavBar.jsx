'use server';

import fetchCoach from '../serverfunctions/coach/fetchCoach';
import { createClient } from "@/utils/supabase/server";
import NavBar2 from "./NavBar2";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import MuiMenu from '../buttons/avatar/MuiMenu'


export default async function NavBar() {
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

  let coachCopy = Object.assign({}, await fetchCoach('coach_codes'));


  return (
    <AppBar
      className="w-full flex justify-center border-b border-b-foreground/10 h-16"
      position="sticky"
      variant="contained"
      sx={{ width: "100%" }}
      color="success"
      
    >
      {/* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm"> */}
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <NavBar2 user={user} coachCopy={coachCopy} />
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.user_metadata.first_name}{" "}
                {user.user_metadata.last_name}!
                <MuiMenu
                  name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`}
                  logout={signOut}
                  profile={profiles}
                />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-3 flex rounded-md no-underline bg-green-600 hover:bg-green-700 text-white hover:text-white"
              >
                Login
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* </div> */}
    </AppBar>
  );
  
}
