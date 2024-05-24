'use server';

import LinkButton from '@/components/buttons/LinkButton';
import { Box, Paper, Typography, Grid, colors } from '@mui/material';
import MuiAvatar from '@/components/buttons/avatar/MuiAvatar';
import EmailReset from '../../components/forms/reset/EmailReset';
import PasswordReset from '../../components/forms/reset/PasswordReset';
import { createClient } from "@/utils/supabase/server";
import { Margin } from '@mui/icons-material';

export default async function ProfilePage() {
    const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

    return (
    <>
        <h1>Profile</h1>
        <Paper square={false} elevation={3} style={{ width: '45%' }}>
            <Box>
                <Grid container>
                    <Grid item>
                        <MuiAvatar name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`} style={{ width: 90, height: 90 }} sizes="large"/>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'>{user.user_metadata.first_name} {user.user_metadata.last_name}</Typography>
                    </Grid>
                </Grid>
                <EmailReset />
            </Box>
        </Paper>
        <Box style={{ width: '45%' }} marginTop={5}>
            <Typography variant='h4'>Forms</Typography>
            <Grid container spacing={3} justifyContent={'center'} padding={1}>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant='h5'>Onboarding Form</Typography>
                        <Typography variant='body2'>Description</Typography>
                        <LinkButton href="/profile/onboarding?section1=true" startIcon={null} label="Onboarding Form" type='' style={{ Margin : '2rem' }} />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant='h5'>Coach Registration Form</Typography>
                        <Typography variant='body2'>Description</Typography>
                        <LinkButton href="/profile/becomecoach" startIcon={null} label="Become a Coach" type='' style={{ Margin : 2 }} />
                    </Paper>
                </Grid>
                
            </Grid>
            
        </Box>
        <Box style={{ width: '45%' }} marginTop={5}>
            <Typography variant='h4'>Your Password</Typography>
            <Typography variant='body2'>Change Password</Typography>
            <PasswordReset />
        </Box>
    </>
    )
}