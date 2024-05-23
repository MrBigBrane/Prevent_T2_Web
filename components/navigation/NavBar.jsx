'use server';

import fetchCoach from '../serverfunctions/coach/fetchCoach';
import { createClient } from "@/utils/supabase/server";
import NavBar2 from "./NavBar2";
import { AppBar, Badge, Box, Container, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import MuiMenu from '../buttons/avatar/MuiMenu'
import MailIcon from '@mui/icons-material/Mail';
import Inbox from '@/components/buttons/linkbuttons/Inbox';


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
  let totalAnnouncements;
  let readAnnouncements;
  let unreadAnnouncements;

  if(profiles){
    

  totalAnnouncements = await supabase 
    .from('announcements')
    .select()
    .eq('class_code', data[0].class_codes)

  console.log(totalAnnouncements?.data.length)
  
  readAnnouncements = await supabase
  .from('notification_counter')
  .select()
  .eq('user', user.id)

  console.log(readAnnouncements?.data[0].counter)

  unreadAnnouncements = totalAnnouncements?.data.length - readAnnouncements?.data[0].counter
  }

  


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
                {profiles ? (
                <Inbox unreadAnnouncements={unreadAnnouncements} />
                ) : null}
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
