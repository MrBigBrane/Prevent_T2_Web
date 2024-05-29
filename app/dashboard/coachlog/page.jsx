'use server';

import MuiModal from '@/components/forms/userforms/MuiModal';
import LinkButton from '@/components/buttons/LinkButton';
import CoachTable from '@/components/tables/users/CoachTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { Box, Typography } from '@mui/material';
import LinkAddButton from '@/components/buttons/linkbuttons/LinkAddButton';

export default async function CoachPage({ searchParams }) {
  const user = Object.assign({}, await getCurrentUser())

  // If the user is not logged in, redirect them to the login page
  if (!user.id) {
    redirect('/login?message=Please login before trying to access user data.')
  }

  let minutesData = Array.from(await minutesPerWeek())
  let weeksMinutes = minutesData[1][minutesData[1].length - 1].toString()

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
          <CoachTable table="lifestyle_coach_log" />
        </Box>
      </>
    );
}
