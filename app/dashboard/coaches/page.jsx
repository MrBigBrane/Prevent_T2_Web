'use server';

import MuiTree from '@/components/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiInviteModal from '@/components/buttons/coaching/MuiInviteModal'
import AddClassModal from '@/components/forms/coaching/AddClassModal'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import { redirect } from 'next/navigation';

export default async function CoachesPage({ searchParams }) {
    let classCopy = Object.assign({}, await fetchCoach('coach_codes'));
    console.log(classCopy)

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/dashboard/becomecoach?unauthorized=true')
    }

    let coachUserData = Array.from(await coachUserList())

    return (
        <>
            {searchParams?.classcreated &&  <MuiSuccess severity="success">Class Created!</MuiSuccess>}
            {searchParams?.userdeleted &&  <MuiSuccess severity="success">User Deleted!</MuiSuccess>}
            <h1>Welcome to coaches page!</h1>
            <MuiTree data={coachUserData[1]} codes={coachUserData[0]} />
            <AddClassModal />
            <MuiInviteModal classInfo={coachUserData[2]} />
        </>
    )
}