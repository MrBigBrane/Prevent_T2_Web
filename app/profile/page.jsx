'use client';

import LinkButton from '@/components/buttons/LinkButton';
import { Box, Paper, Typography, Grid } from '@mui/material';
import MuiAvatar from '@/components/buttons/avatar/MuiAvatar';
import EmailReset from '../../components/forms/reset/EmailReset';
import PasswordReset from '../../components/forms/reset/PasswordReset';

export default function ProfilePage() {
    return (
    <>
        <h1>Profile</h1>
        <Paper square={false} elevation={3} style={{ width: '45%' }}>
            <h1>Hello World</h1>
            <Box>
                {/* <MuiAvatar name={null} sx={{ width: 32, height: 32 }}/> */}
                <Typography variant='h4'>Display Name</Typography>
                <EmailReset />
            </Box>
        </Paper>
        <h1>Forms</h1>
        <Box>
            <Grid container>
                <Grid item>
                    <Paper>
                        <Typography variant='h5'>Description</Typography>
                        <LinkButton href="/profile/onboarding?section1=true" startIcon={null} label="Onboarding Form" type='' />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <Typography variant='h5'>Description</Typography>
                        <LinkButton href="/profile/becomecoach" startIcon={null} label="Become a Coach" type='' />
                    </Paper>
                </Grid>
                
            </Grid>
            
        </Box>
        <h1>Password Change</h1>
        <PasswordReset />
    </>
    )
}