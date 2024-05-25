'use server';

import ActivityTable from "../../../components/tables/users/ActivityTable";
import MuiModal from '../../../components/forms/userforms/MuiModal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser'
import { redirect } from "next/navigation";
import { Box, Typography } from "@mui/material";


export default async function ActivityTablePage({ searchParams }) {
  // Fetch the current user from the server
  const user = Object.assign({}, await getCurrentUser())

  // If the user is not logged in, redirect them to the login page
  if (!user.id) {
    redirect('/login?message=Please login before trying to access user data.')
  }

  return (
    <>
      {/* Render success messages for add, edit, and delete actions */}
      {searchParams?.add && (
        <MuiSuccess severity="success">Activity Added!</MuiSuccess>
      )}
      {searchParams?.edit && (
        <MuiSuccess severity="success">Activity Edited!</MuiSuccess>
      )}
      {searchParams?.delete && (
        <MuiSuccess severity="success">Activity Deleted!</MuiSuccess>
      )}

      {/* Render a back button */}
      <LinkButton
        href="/dashboard"
        label="Back"
        type={null}
        startIcon={<ArrowBackIcon />}
        padding={2}
        style={{position : 'absolute', left: '17rem', top: '5rem'}}
      />

      {/* Render the Activity Logs page header */}
      

      {/* Render the Activity Logger modal component */}
      <MuiModal
        edit={false}
        title="Activity Logger"
        rowId={false}
        field1=""
        field2=""
        field3=""
        search={searchParams?.open ? true : false}
        style={{position : 'fixed', right: '1rem', top: '5rem'}}
      />
      <Typography variant="h5" style={{ textAlign: "center" }}>Activity Logs</Typography>
      {/* Render the ActivityTable component */}
      <Box
        style={{ width: "95%", textAlign: "center" }}
        marginTop={4}
        marginLeft={1}
        marginRight={1}
      >
        <ActivityTable table="activity_log" />
      </Box>
    </>
  );
}
