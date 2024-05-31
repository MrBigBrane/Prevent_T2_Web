'use client';

import MuiButton from '@/components/buttons/MuiButton'
import MuiTextField from '@/components/inputs/MuiTextField'
import joinClassTableAction from '@/lib/joinClassTableAction'
import { useFormState } from 'react-dom'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import LinkButton from '@/components/buttons/LinkButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Paper, Typography } from '@mui/material';


export default function JoinClassPage({ searchParams }) {

    // Use the useFormState hook to manage the form state and the form action
    const [state, formAction] = useFormState(joinClassTableAction, { message: null });

    return (
      <>
        {/* Render error messages for join and unauthorized actions */}
        {searchParams?.notjoined && (
          <MuiSuccess severity="error">Error! Join Failed.</MuiSuccess>
        )}
        {searchParams?.unauthorized && (
          <MuiSuccess severity="warning">
            Unauthorized Access! Please join a class first.
          </MuiSuccess>
        )}
        {searchParams?.left && (
          <MuiSuccess severity="success">Class left!</MuiSuccess>
        )}

        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", top: "5rem", left: "1rem" }}
        />
        {/* Render the Join Class page header */}

        {/* Render the Join Class form */}
        <Box style={{ width: "30%", margin: "auto", marginTop: "15rem" }}>
          <Paper elevation={10} square={false}>
            <Box padding={2}>
              <Typography variant="h5" padding={1}>
                <b color='success'>Join Class</b>
              </Typography>
              <form action={formAction}>
                <MuiTextField
                  id="class"
                  name="classcode"
                  label="Class Code"
                  variant="outlined"
                  type=""
                  disabled={null}
                  defaultValue=""
                  color="success"
                />
              </form>
              <MuiButton
                startIcon={null}
                label="Enter Code"
                type="submit"
                color="success"
                style={{ marginLeft: "8px"}}
              />
            </Box>
          </Paper>
        </Box>
      </>
    );
}
