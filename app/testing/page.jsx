'use client';

import { Box, Button, Grid, Typography } from '@mui/material';
import ActivityCard from '../../components/tables/users/activities/ActivityCard';
import { useState } from 'react';
import MuiButton from '@/components/buttons/MuiButton';


export default function TestPage() {
  const [data, setData] = useState(0);

  function handleClick() {
    setData((prev) => prev + 1)
  }


  return (
    <>
      <MuiButton click={handleClick} label="Add Row" />
      <Typography variant="h4" style={{ textAlign: "center" }}>Testing: {data}</Typography>
    </>
      
  );
}
