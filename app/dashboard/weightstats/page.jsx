'use server';

import MuiDrawer from '@/components/navigation/userdashboard/MuiDrawer'
import { Box, Paper, Typography } from '@mui/material'

import WeightGraph from '@/components/graph/WeightGraph';

export default async function TesterPage() {

    return (
      <>
        <h1>Weight Stats</h1>
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
                    Weight Progress
                  </Typography>
                  <WeightGraph />
                </Paper>
              </Box>
            }
          />
        </Box>
      </>
    );
}