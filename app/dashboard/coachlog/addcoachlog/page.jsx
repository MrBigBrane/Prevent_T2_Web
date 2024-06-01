'use server';

import CoachLog from '@/components/forms/userforms/CoachForm'
import { createClient } from '@/utils/supabase/server';
import { Box, Paper, Typography } from '@mui/material'
import { redirect } from 'next/navigation';

export default async function AddCoachLog() {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

      if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <>
        <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false}>
            <Box>
              <Typography variant="h4" padding={1}>
                Add Coach Log
              </Typography>
              <CoachLog />
            </Box>
          </Paper>
        </Box>
      </>
    );
}