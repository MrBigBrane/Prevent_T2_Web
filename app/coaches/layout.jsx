'use server';

import CoachDashboard from '@/components/navigation/userdashboard/CoachDashboard';
import MuiList from '@/components/display/cohorts/MuiList'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import { Box, List, ListSubheader } from '@mui/material';
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';


export default async function RootLayout({ children }) {
    
    let coach = Object.assign({}, await fetchCoach())
    let coachUserData;
    if(coach.user != false){
        coachUserData = Array.from(await coachUserList())
    }


    let tree = coachUserData[1].map((row) => {
      return <MuiList key={row.id} cohortName={row.label} code={row.id}/>
    })

  return (
    <Box width={"100%"}>
      {coachUserData ? <CoachDashboard
        main={children}
        tree={<List subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Your Classes
          </ListSubheader>}>{tree}</List>}
      /> : children}
    </Box>
  );
}