'use server';

import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

import AddClassCoach from "../../../components/forms/coaching/AddClass";
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { redirect } from 'next/navigation';
import { Box, Paper } from '@mui/material';

export default async function BecomeCoach({ searchParams }) {
    const user = Object.assign({},await getCurrentUser())

    if(!user.id){
      redirect('/login?message=Please login before trying to become a coach.')
    }

    return (
    <>
        {searchParams?.unauthorized &&  <MuiSuccess severity="warning">Please Create a Class Before Accessing The Coaches Dashboard.</MuiSuccess>}
        <Box sx={{ width: "30%", margin: "auto", marginTop: "15rem" }}>
            <Paper elevation={10} square={false}>
                <AddClassCoach>Create a Class</AddClassCoach>
            </Paper>
        </Box>
        
    </>
    )
}