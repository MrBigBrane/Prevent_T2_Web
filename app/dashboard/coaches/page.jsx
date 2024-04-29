'use server';

import MuiTree from '@/components/cohorts/MuiTree'
import coachUserList from '@/components/serverfunctions/coach/coachUserList'
import MuiInviteModal from '@/components/buttons/coaching/MuiInviteModal'
import AddClassModal from '@/components/forms/coaching/AddClassModal'

export default async function CoachesPage() {
    let coachUserData = Array.from(await coachUserList())

    return (
        <>
            
            <h1>Welcome to coaches page!</h1>
            <MuiTree data={coachUserData[1]} codes={coachUserData[0]} />
            <AddClassModal />
            <MuiInviteModal classInfo={coachUserData[2]} />
        </>
    )
}