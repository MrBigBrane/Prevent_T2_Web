'use server';

import LinkButton from '@/components/buttons/LinkButton';
import { Box, Paper, Typography, Grid, colors, IconButton, Button } from '@mui/material';
import MuiAvatar from '@/components/buttons/avatar/MuiAvatar';
import EmailReset from '../../components/forms/reset/EmailReset';
import PasswordModal from '../../components/forms/reset/passwordchange/PasswordModal';
import { createClient } from "@/utils/supabase/server";
import LaunchIcon from '@mui/icons-material/Launch';
import NameModal from '../../components/forms/reset/username/NameModal';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function ProfilePage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        //   alignItems="center"
        style={{ height: "100vh" }} // Full viewport height
      >
        <Grid container item xs={12} justifyContent="center" marginTop={5}>
          <Grid item xs={10} sm={10} md={8}>
            <Paper
              elevation={10}
              style={{ padding: 16, textAlign: "center", margin: "auto" }}
            >
              <IconButton>
                <MuiAvatar
                  name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`}
                  style={{ width: 90, height: 90 }}
                />
              </IconButton>
              <Grid display={"flex"} justifyContent={"center"}>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  {user.user_metadata.first_name} {user.user_metadata.last_name}
                </Typography>
                <NameModal
                  firstName={user.user_metadata.first_name}
                  lastName={user.user_metadata.last_name}
                />
              </Grid>
              <Grid display={"flex"} justifyContent={"center"}>
                <EmailReset email={user.user_metadata.email} />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={10} sm={10} md={8}>
            <Typography variant="h4" sx={{ marginBottom: "5px" }}>
              Forms
            </Typography>
            <Grid
              container
              item
              xs={12}
              spacing={2}
              display={"flex"}
            >
              <Grid item xs={6}>
                <Paper
                  elevation={10}
                  style={{ padding: 16, margin: "auto" }}
                >
                  <Typography variant="h5">Onboarding Form</Typography>
                  <Typography variant="body2" marginBottom={2}>
                    Description
                  </Typography>
                  <LinkButton
                    href="/profile/onboarding?section1=true"
                    endIcon={<LaunchIcon />}
                    label="Onboarding Form"
                    type=""
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={10}
                  style={{ padding: 16, margin: "auto" }}
                >
                  <Typography variant="h5">Coach Registration Form</Typography>
                  <Typography variant="body2" marginBottom={2}>
                    Description
                  </Typography>
                  <Link href="/profile/becomecoach">
                    <Button endIcon={<LaunchIcon />} variant="contained" color='success'>
                      Become a Coach
                    </Button>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={10} sm={10} md={8}>
            <Typography variant="h4" sx={{ marginBottom: "5px" }}>
              Security
            </Typography>
            <Grid item xs={12}>
            <Paper elevation={10} style={{ padding: 16, textAlign: "center", margin: "auto" }}>
              <Typography variant="h5" marginBottom={2}>
                Change Password
              </Typography>
              <PasswordModal />
            </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}