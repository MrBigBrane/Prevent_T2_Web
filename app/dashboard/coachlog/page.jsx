'use server';

import MuiModal from '@/components/forms/userforms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import CoachTable from '@/components/tables/users/CoachTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { Box } from '@mui/material';

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
        
        
        
          <LinkButton 
          href="/dashboard/weightstats" 
          label="Back" 
          type={null} 
          startIcon={<ArrowBackIcon />} 
          padding={2}
          style={{position : 'fixed', left: '1rem', top: '5rem'}}
        />
        <MuiModal 
          edit={false} 
          title={null} 
          rowId={false} 
          field3={weeksMinutes} 
          field2='' 
          field1='' 
          style={{position : 'fixed', right: '1rem', top: '5rem'}}
          search={searchParams?.open ? true : false}
          // sx={{
          //   display: 'grid',
          //   justifyContent: 'end',
          //   alignItems: 'center',
          //   height: '100vh',
          //   paddingRight: 2
          // }}
        />
        <h1 style={{ marginTop: '1.5rem'}}>Coaching Log</h1>
        <Box 
        style={{width: '95%', textAlign: 'center'}}
         marginTop={4}
         marginLeft={1}
         marginRight={1}>
          
          <CoachTable table="lifestyle_coach_log" />
        </Box>
        
        
      </>
        
    )
}
