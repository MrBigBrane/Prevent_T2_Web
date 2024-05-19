'use server';

import CoachDashboard from '@/components/navigation/userdashboard/CoachDashboard';
import MuiTree from '@/components/display/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import { Box } from '@mui/material';


export default async function RootLayout({ children } : {
  children: React.ReactNode}) {
    let coachUserData = Array.from(await coachUserList())
  return (
    <Box width={"100%"}>
      <CoachDashboard
        main={children}
        tree={<MuiTree data={coachUserData[1]} codes={coachUserData[0]} />}
      />
    </Box>
  );
}