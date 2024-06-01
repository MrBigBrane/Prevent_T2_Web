'use server';

import MuiDrawer from '@/components/navigation/userdashboard/MuiDrawer'
import { Box, Paper, Typography } from '@mui/material'

import WeightGraph from '@/components/graph/WeightGraph';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function TesterPage() {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

      if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <>
        <Typography variant="h5" style={{ textAlign: "center" }}>Weight Stats</Typography>
        <Box width={"100%"}>
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
                    Weight Progress
                  </Typography>
                  <WeightGraph />
                </Paper>
              </Box>
        </Box>
      </>
    );
}
