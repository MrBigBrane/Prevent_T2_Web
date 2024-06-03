'use server';

import LeaveClass from '@/components/buttons/coaching/LeaveClassModal'
import { createClient } from '@/utils/supabase/server';
import { Chip } from '@mui/material';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import { redirect } from 'next/navigation';
import LinkButton from '@/components/buttons/LinkButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Paper, Typography } from '@mui/material';


export default async function YourCoachPage({ searchParams }) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profiles')
    .select('class_codes')
    .eq("id", user?.id);

    const className = await supabase
    .from('coach_codes')
    .select('class_name')
    .eq("code", data[0].class_codes.substring(0, 6));

    let datum;

    if(!user.id){
        redirect('/login')
    }
    else if(!data[0]){
        redirect('/profile/joinclass?unauthorized=true')
    }
    else{
        datum = data[0].class_codes
    }
   

    return (
      <>
        {searchParams?.joined && (
          <MuiSuccess severity="success">Class Joined!</MuiSuccess>
        )}
        {searchParams?.alreadyjoined && (
          <MuiSuccess severity="success">
            You Are Already in a Class!
          </MuiSuccess>
        )}
        <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false}>
            <Box padding={2}>
              <LinkButton
                href="/profile"
                label="Back"
                type={null}
                startIcon={<ArrowBackIcon />}
                style={{ position: "fixed", left: "1rem", top: "5rem" }}
              />
              <Typography variant="h6" padding={1}>
                Your Class
              </Typography>
              <Chip
                label={className?.data[0]?.class_name}
                variant="outlined"
                sx={{ padding: "1rem", marginBottom: "8px" }}
              />
              <br />
              <Chip
                label={datum}
                variant="outlined"
                sx={{ padding: "1rem", marginBottom: "8px" }}
              />
              <br />
              <LeaveClass />
            </Box>
          </Paper>
        </Box>
      </>
    );
}