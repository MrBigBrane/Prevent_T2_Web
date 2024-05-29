'use server';

import LinkButton from '@/components/buttons/LinkButton';
import { Box, Paper, Typography, Grid, colors, IconButton } from '@mui/material';
import MuiAvatar from '@/components/buttons/avatar/MuiAvatar';
import EmailReset from '../../components/forms/reset/EmailReset';
import PasswordModal from '../../components/forms/reset/passwordchange/PasswordModal';
import { createClient } from "@/utils/supabase/server";
import LaunchIcon from '@mui/icons-material/Launch';
import NameModal from '../../components/forms/reset/username/NameModal';

export default async function ProfilePage() {
    const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

    return (
      <>
        <Paper elevation={3} style={{ width: "45%" }}>
          <Box>
            <IconButton>
              <MuiAvatar
                name={`${user.user_metadata.first_name} ${user.user_metadata.last_name}`}
                style={{ width: 90, height: 90 }}
              />
            </IconButton>
            <Typography
              variant="h4"
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              {user.user_metadata.first_name}
              {user.user_metadata.last_name}
            </Typography>
            <NameModal
              firstName={user.user_metadata.first_name}
              lastName={user.user_metadata.last_name}
            />
            <Box marginLeft={"auto"}>
              <Box marginLeft={5}>
                <EmailReset email={user.user_metadata.email} />
              </Box>
            </Box>
          </Box>
        </Paper>

        <Box style={{ width: "45%" }} marginTop={5}>
          <Typography variant="h4">Forms</Typography>
          <Grid container spacing={3} justifyContent={"center"}>
            <Grid item xs={6}>
              <Paper>
                <Box sx={{ padding: "20px" }}>
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
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Box sx={{ padding: "20px" }}>
                  <Typography variant="h5">Coach Registration Form</Typography>
                  <Typography variant="body2" marginBottom={2}>
                    Description
                  </Typography>
                  <LinkButton
                    href="/profile/becomecoach"
                    endIcon={<LaunchIcon />}
                    label="Become a Coach"
                    type=""
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={5} width={"45%"}>
          <Typography variant="h4">Security</Typography>
          <Box>
            <Paper elevation={10}>
              <Box sx={{ padding: "20px" }}>
                <Typography variant="h5" marginBottom={2}>
                  Change Password
                </Typography>
                <PasswordModal />
              </Box>
            </Paper>
          </Box>
        </Box>
      </>
    );
}