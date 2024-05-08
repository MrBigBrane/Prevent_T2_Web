'use server';

import MuiTree from '@/components/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiInviteModal from '@/components/buttons/coaching/MuiInviteModal'
import AddClassModal from '@/components/forms/coaching/AddClassModal'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import { redirect } from 'next/navigation';
import MuiSpeedDial from '@/components/buttons/speeddial/MuiSpeedDial'
import { DialogContentText } from '@mui/material';

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
            <h1>Welcome to coaches page!</h1>
            <MuiTree data={coachUserData[1]} codes={coachUserData[0]} />
            <MuiSpeedDial classInfo={classes}/>
        </>
    )
}