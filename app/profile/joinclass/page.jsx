'use server';

import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import LinkButton from '@/components/buttons/LinkButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Paper, Typography } from '@mui/material';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import JoinClass from '../../../components/forms/coaching/joinclass/JoinClass';


export default async function JoinClassPage({ searchParams }) {
  const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

      if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <>
        {/* Render error messages for join and unauthorized actions */}
        {searchParams?.notjoined && (
          <MuiSuccess severity="error">Error! Join Failed.</MuiSuccess>
        )}
        {searchParams?.unauthorized && (
          <MuiSuccess severity="warning">
            Unauthorized Access! Please join a class first.
          </MuiSuccess>
        )}
        {searchParams?.left && (
          <MuiSuccess severity="success">Class left!</MuiSuccess>
        )}

        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", top: "5rem", left: "1rem" }}
        />
        {/* Render the Join Class page header */}

        {/* Render the Join Class form */}
        <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false}>
            <Box padding={2}>
              <Typography variant="h5" padding={1}>
                <b color='success'>Join Class</b>
              </Typography>
              <JoinClass />
            </Box>
          </Paper>
        </Box>
      </>
    );
}
