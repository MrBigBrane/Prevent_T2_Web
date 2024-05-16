'use server';

import MinutesGraph from '@/components/graph/MinutesGraph';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { redirect } from 'next/navigation';
import { Box, Paper, Typography } from '@mui/material';
import MuiDrawer from '@/components/navigation/userdashboard/MuiDrawer'

export default async function Index({ searchParams }) {
  const user = Object.assign({}, await getCurrentUser())
    if(!user.id){
      redirect('/login?message=Please login before trying to access user data.')
    }


  return (
    <>
      {searchParams?.form &&  <MuiSuccess severity="success">Form Submitted!</MuiSuccess>}
      <h1>Minute Stats</h1>
        <Box width={"100%"}>
          <MuiDrawer
            main={
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  padding: "20px",
                  bottompadding: "0px",
                }}
              >
                <Paper elevation={10}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ padding: "20px" }}
                  >
                    Minute Progress
                  </Typography>
                  <MinutesGraph />
                </Paper>
              </Box>
            }
          />
        </Box>
      
    </>
  );
}
