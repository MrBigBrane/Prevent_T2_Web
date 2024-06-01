'use server';

import ActionPlan from '@/components/forms/plans/action/ActionPlan'
import { createClient } from '@/utils/supabase/server';
import { Box } from '@mui/material'
import { Paper, Typography } from '@mui/material'
import { redirect } from 'next/navigation';

export default async function AddActivity() {
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
                    <Typography variant="h4" padding={1}>Add Action Plan</Typography>
                    <Box padding={2}>
                        <ActionPlan />
                    </Box>
                </Paper>
            </Box>
        </>
        
    )
}