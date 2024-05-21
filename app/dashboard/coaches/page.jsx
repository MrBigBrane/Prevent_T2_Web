'use server';

import MuiTree from '@/components/display/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import { redirect } from 'next/navigation';
import AddClassModal from '@/components/forms/coaching/AddClassModal'
import AddClassCoach from '@/components/forms/coaching/AddClass';
import { DialogContentText, Typography } from '@mui/material';

export default async function CoachesPage({ searchParams }) {
    let classCopy = Object.assign({}, await fetchCoach('coach_codes'));

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/dashboard/becomecoach?unauthorized=true')
    }

    let coachUserData = Array.from(await coachUserList())

    let classes = [];
    {coachUserData[2].map((row) => {
        classes.push(
            <DialogContentText key={row[0]} id="alert-dialog-description">
                Class Name: <b>{row[1]}</b> Join Code: <b>{row[0]}</b>
            </DialogContentText>
        )
        
    })}

    return (
        <>
            {searchParams?.classcreated &&  <MuiSuccess severity="success">Class Created!</MuiSuccess>}
            {searchParams?.userdeleted &&  <MuiSuccess severity="success">User Deleted!</MuiSuccess>}
            {searchParams?.fake &&  <MuiSuccess severity="warning">Class does not exist!</MuiSuccess>}
            <Typography variant="h6">Welcome to coaches page!</Typography>
            <Typography variant="p">Get started by creating a class! If you already have one then go on and checkout
            how your students are doing!</Typography>
            <AddClassModal form={null} title="Add Class"  opening={searchParams?.addclass} />
            <AddClassModal form={classes.map((row) => row)} title="Invite Users"  opening={searchParams?.invite} />
        </>
    )
}