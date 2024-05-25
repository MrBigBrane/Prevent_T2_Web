'use server';

import CoachDashboard from '@/components/navigation/userdashboard/CoachDashboard';
import MuiTree from '@/components/display/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import { Box } from '@mui/material';
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';


export default async function RootLayout({ children }) {
    
    let coach = Object.assign({}, await fetchCoach())
    let coachUserData;
    if(coach.user != false){
        coachUserData = Array.from(await coachUserList())
    }

    

  return (
    <Box width={"100%"}>
      {coachUserData ? <CoachDashboard
        main={children}
        tree={
          <MuiTree
            data={coachUserData[1]}
            codes={coachUserData[0]}
          />
        }
      /> : children}
    </Box>
  );
}