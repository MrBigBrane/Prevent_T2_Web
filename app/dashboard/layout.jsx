'use server';

import MuiDrawer from '@/components/navigation/userdashboard/MuiDrawer'
import { Box } from '@mui/material';
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';


export default async function RootLayout({ children }) {
    let user = Object.assign({}, await getCurrentUser())

  return (
    <Box width={"100%"}>
      {user ? <MuiDrawer
        main={children}
      /> : children}
    </Box>
  );
}