'use server';

import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import { redirect } from 'next/navigation';
import { DialogContentText, Typography } from '@mui/material';

export default async function CoachesPage({ searchParams }) {
    let classCopy = Object.assign({}, await fetchCoach('coach_codes'));

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/profile/becomecoach?unauthorized=true')
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
            {searchParams?.fake &&  <MuiSuccess severity="warning">Class does not exist or you do not have access!</MuiSuccess>}
            {searchParams?.classdeleted &&  <MuiSuccess severity="success">Class Deleted!</MuiSuccess>}
            {searchParams?.edit &&  <MuiSuccess severity="success">Class Name Edited!</MuiSuccess>}
            <Typography variant="h6">Welcome to the coaches dashboard!</Typography>
            <Typography variant="p">If you're ready to help your patients then get started by creating a class! If you already have one then go on and check out
            how your students are doing!</Typography>
        </>
    )
}