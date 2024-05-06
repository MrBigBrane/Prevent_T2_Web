'use server';

import MuiModal from '@/components/forms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import CoachTable from '@/components/tables/CoachTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';

export default async function CoachPage({ searchParams }) {
  const user = Object.assign({}, await getCurrentUser())

  // If the user is not logged in, redirect them to the login page
  if (!user.id) {
    redirect('/login?message=Please login before trying to access user data.')
  }

  let minutesData = Array.from(await minutesPerWeek())
  let weeksMinutes = minutesData[1][minutesData[1].length - 1].toString()

    return (
      <>
        {searchParams?.add &&  <MuiSuccess severity="success">Coach Log Added!</MuiSuccess>}
        {searchParams?.edit &&  <MuiSuccess severity="success">Coach Log Edited!</MuiSuccess>}
        {searchParams?.delete &&  <MuiSuccess severity="success">Coach Log Deleted!</MuiSuccess>}
        <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />
        <h1>Coaching Log</h1>
        <MuiModal edit={false} title={null} rowId={false} field3={weeksMinutes} field2='' field1='' />
        <CoachTable table="lifestyle_coach_log" />
      </>
        
    )
}