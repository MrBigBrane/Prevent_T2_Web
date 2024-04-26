'use server';

import MuiTree from '@/components/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiInviteModal from '@/components/buttons/MuiInviteModal'

export default async function CoachesPage() {
    let coachUserData = Array.from(await coachUserList())

    return (
        <>
            <h1>Welcome to coaches page!</h1>
            <MuiTree data={coachUserData[1]} codes={coachUserData[0]} />
            <MuiInviteModal classInfo={coachUserData[2]} />
        </>
    )
}