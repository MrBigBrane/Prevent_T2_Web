'use server';

import ActivityTable from "../../../components/tables/users/ActivityTable";
import MuiModal from '../../../components/forms/userforms/MuiModal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser'
import { redirect } from "next/navigation";


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
      {searchParams?.add && <MuiSuccess severity="success">Activity Added!</MuiSuccess>}
      {searchParams?.edit && <MuiSuccess severity="success">Activity Edited!</MuiSuccess>}
      {searchParams?.delete && <MuiSuccess severity="success">Activity Deleted!</MuiSuccess>}

      {/* Render a back button */}
      <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />

      {/* Render the Activity Logs page header */}
      <h1>Activity Logs</h1>

      {/* Render the Activity Logger modal component */}
      <MuiModal edit={false} title="Activity Logger" rowId={false} field1='' field2='' field3='' />

      {/* Render the ActivityTable component */}
      <ActivityTable table="activity_log" />
    </>
  )
}
