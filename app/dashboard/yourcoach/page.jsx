'use server';

import { createClient } from '@/utils/supabase/server';
import { Chip } from '@mui/material';

export default async function YourCoachPage() {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profiles')
    .select('class_codes')
    .eq("user", user.id);

    let datum;
    
    if(data){
        datum = data[0].class_codes
    }
    else {
        datum = 'No Class'
    }

    return (
        <>
            <h1>Your Current Class</h1>
            <Chip label={datum} variant="outlined" />
        </>
    )
}