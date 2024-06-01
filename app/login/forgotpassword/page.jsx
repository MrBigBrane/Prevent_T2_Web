import { Box, Paper, Typography } from "@mui/material";
import PasswordForm from "../../../components/forms/forgotpassword/PasswordForm";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';
import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ForgotPassword({ searchParams }) {
    return (
      <>
        {searchParams?.passwordreset && (
          <MuiSuccess severity="success">
            Email Sent! Please check your inbox.
          </MuiSuccess>
        )}
        {searchParams?.passwordnotreset && (
          <MuiSuccess severity="error">Email Send Failed.</MuiSuccess>
        )}
        <LinkButton
          href="/login"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", top: "5rem", left: "1rem" }}
        />
        <Box
          sx={{
            width: "30%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper elevation={10} square={false}>
            <Box padding={2}>
              <Typography variant="h4" padding={1}>
                Forgot Password
              </Typography>
              <PasswordForm />
            </Box>
          </Paper>
        </Box>
      </>
    );
}