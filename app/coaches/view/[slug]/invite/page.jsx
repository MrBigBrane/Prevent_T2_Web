'use server';

import { createClient } from '@/utils/supabase/server';
import { Box, Paper, Typography } from '@mui/material';

export default async function Invite({ params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
     .select()
     .eq('code', params.slug.substring(0, 6))

    return (
      <div>
        <Box sx={{ width: "30%", margin: "auto", marginTop: "15rem", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false}>
            <Box padding={2}>
                <Typography variant="h4" padding={1}>Class Details</Typography>
                <Box>
                    <Typography variant="body1" padding={1}>Class Name: <b>{data[0].class_name}</b></Typography>
                    <Typography variant="body1" padding={1}>Class Code: <b>{data[0].code}</b></Typography>
                </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    );
}