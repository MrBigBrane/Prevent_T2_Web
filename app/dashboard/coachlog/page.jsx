'use server';

import CoachStats from '@/components/tables/users/coach/CoachStats';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { Box, Typography } from '@mui/material';
import { createClient } from '@/utils/supabase/server';
import { redirect } from "next/navigation";

export default async function CoachPage({ searchParams }) {

  const supabase = createClient();

  const user = Object.assign({}, await getCurrentUser())

  // If the user is not logged in, redirect them to the login page
  if (!user.id) {
    redirect('/login?message=Please login before trying to access user data.')
  }

  const { data, error } = await supabase
  .from("lifestyle_coach_log")
  // try with {} if doesn't work without
  .select()
  .eq("user", user.id)
  .order('created_at', { ascending: true });

    return (
      <>
        {searchParams?.add && (
          <MuiSuccess severity="success">Coach Log Added!</MuiSuccess>
        )}
        {searchParams?.edit && (
          <MuiSuccess severity="success">Coach Log Edited!</MuiSuccess>
        )}
        {searchParams?.delete && (
          <MuiSuccess severity="success">Coach Log Deleted!</MuiSuccess>
        )}

        <Typography variant="h5" style={{ textAlign: "center" }}>
          Coach Logs
        </Typography>

        <Box
          style={{ width: "95%", textAlign: "center" }}
          marginTop={4}
          marginLeft={1}
          marginRight={1}
        >
          <CoachStats data={data} />
        </Box>
      </>
    );
}
