'use server';

import LeaveClass from '@/components/buttons/coaching/LeaveClassModal'
import { createClient } from '@/utils/supabase/server';
import { Chip } from '@mui/material';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import { redirect } from 'next/navigation';
import LinkButton from '@/components/buttons/LinkButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default async function YourCoachPage({ searchParams }) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profiles')
    .select('class_codes')
    .eq("id", user.id);

    let datum;

    if(!user.id){
        redirect('/login')
    }
    else if(!data[0]){
        redirect('/profile/joinclass?unauthorized=true')
    }
    else{
        datum = data[0].class_codes
    }
   

    return (
        <>
            {searchParams?.joined &&  <MuiSuccess severity="success">Class Joined!</MuiSuccess>}
            {searchParams?.alreadyjoined &&  <MuiSuccess severity="success">You Are Already in a Class!</MuiSuccess>}
            <LinkButton 
                href="/profile"
                label="Back"
                type={null}
                startIcon={<ArrowBackIcon />}
                style={{position : 'fixed', left: '1rem', top: '5rem'}} 
            />
            <h1 style={{paddingTop: '1.5rem', paddingBottom: '1rem'}}>Your Current Class</h1>
            <Chip 
                label={datum} variant="outlined"
                style={{pading: '1rem'}}
            />
            <LeaveClass />
        </>
    )
}