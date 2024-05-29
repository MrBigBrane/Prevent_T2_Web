'use server';

import CoachDashboard from '@/components/navigation/userdashboard/CoachDashboard';
import MuiList from '@/components/display/cohorts/MuiList'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import { Box } from '@mui/material';
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';


export default async function TestPage() {
    
    let coach = Object.assign({}, await fetchCoach())
    let coachUserData;
    if(coach.user != false){
        coachUserData = Array.from(await coachUserList())
    }


    let tree = coachUserData[1].map((row) => {
      return <MuiList cohortName={row.label} code={row.id}/>
    })

    console.log(tree)

  return (
    <Box width={"100%"}>
      {coachUserData ? <CoachDashboard
        main={<div>Hello</div>}
        tree={tree}
      /> : null}
    </Box>
  );
}
