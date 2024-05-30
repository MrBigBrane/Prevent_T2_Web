'use server';

import { Box, Typography } from "@mui/material";

export default async function Index() {

  return (
    <Box>
        <Typography variant="h4" style={{ textAlign: "center" }}>Home</Typography>
        <Typography variant="h6">Welcome to NRIVAs Diabetes Prevention Program!</Typography>
        <Typography variant="subtitle1">Helping you get and maintain great lifestyle habits</Typography>
        <Typography variant="h6">To get started, create an account or login!</Typography>
    </Box>
  );
}
