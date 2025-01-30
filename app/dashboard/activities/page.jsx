"use server";

import ActivityTable from "../../../components/tables/users/activities/ActivityStats";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MuiSuccess from "@/components/buttons/alerts/MuiSuccess";
import getCurrentUser from "@/components/serverfunctions/getCurrentUser";
import { redirect } from "next/navigation";
import { Box, Button, Grid, Typography } from "@mui/material";
import { createClient } from '@/utils/supabase/server';

export default async function ActivityTablePage({ searchParams }) {

  const supabase = createClient();

  // Fetch the current user from the server
  const user = Object.assign({}, await getCurrentUser());

  // If the user is not logged in, redirect them to the login page
  if (!user?.id) {
    redirect("/login?message=Please login before trying to access user data.");
  }

  const { data, error } = await supabase
    .from('activity_log')
    // try with {} if doesn't work without
    .select()
    .eq("user", user.id)
    .order('created_at', { ascending: true });

  return (
    <>
      {searchParams?.add && (
        <MuiSuccess severity="success">Activity Added!</MuiSuccess>
      )}
      {searchParams?.edit && (
        <MuiSuccess severity="success">Activity Edited!</MuiSuccess>
      )}
      {searchParams?.delete && (
        <MuiSuccess severity="success">Activity Deleted!</MuiSuccess>
      )}

      <Typography variant="h5" style={{ textAlign: "center" }}>
        Activity Logs
      </Typography>
      <Box
        style={{ width: "95%", textAlign: "center" }}
        marginTop={4}
        marginLeft={1}
        marginRight={1}
      >
        <ActivityTable data={data}/>
      </Box>
    </>
  );
}
