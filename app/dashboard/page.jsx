'use server';

import MuiModal from '@/components/forms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import MinutesGraph from '@/components/graph/MinutesGraph';
import WeightGraph from '@/components/graph/WeightGraph';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek'
import TableViewIcon from '@mui/icons-material/TableView';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { redirect } from 'next/navigation';
import { Box, Container, Paper, Typography } from '@mui/material';

export default async function Index({ searchParams }) {
  const user = Object.assign({}, await getCurrentUser())
    if(!user.id){
      redirect('/login?message=Please login before trying to access user data.')
    }

  let minutesData = Array.from(await minutesPerWeek())
  let weeksMinutes = minutesData[1][minutesData[1].length - 1].toString()

  return (
    <div className="flex-1 w-full flex flex-col gap-20">
      {searchParams?.form &&  <MuiSuccess severity="success">Form Submitted!</MuiSuccess>}
      <Box sx={{ width: '100%', textAlign: 'center', padding: '20px', bottompadding: '0px' }}>
        <Paper elevation={10}>
          <Typography variant="h6" component="h2" sx={{ padding: '20px'}}>Weight Progress</Typography>
          <WeightGraph />
        </Paper>
      </Box>
      <Box display={"inline-block"}>
        <h1 style={{
          // position:"fixed",
          // left:"1rem"
        }}>Lifestyle Logs</h1>
        <MuiModal edit={false} title={null} rowId={false} field1='' field2='' field3={weeksMinutes} style={{position : 'fixed', left: '1rem'}} />
        <LinkButton href="dashboard/coachlog"
        type={null}
        label="View Lifestyle Log"
        startIcon={<TableViewIcon/>}
        style={{right: '1rem'}}
        />
      </Box>
      
      <h1>Exercise Minutes</h1>
      <MinutesGraph />
      <div>
          <h1 style={{
            float: 'left'
          }}>
            Activity Logs
          </h1>
          <MuiModal edit={false} title='Activity Logger' rowId={false} field1='' field2='' field3='' />
          <LinkButton href="dashboard/activities" 
            type={null}
            label="View Activities"
            startIcon={<TableViewIcon />}
            style={{positition : 'fixed', right: '0rem', top: '1rem'}}
          />
      </div>
      
      
    </div>
  );
}
