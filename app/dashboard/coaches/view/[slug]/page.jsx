'use server';

import { createClient } from "@/utils/supabase/server";

import CoachUserTable from '@/components/tables/coachview/classview/CoachUserTable'

import { redirect } from "next/navigation";
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";

export default async function UserPage({ params }) {

    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
    .select()
    .eq('code', params.slug.substring(0, 6));

    let classCopy = Array.from(await fetchCoach('coach_codes'));

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/dashboard/becomecoach?unauthorized=true')
    }
    
    return (
        <>
            <LinkButton href="/dashboard/coaches" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            <p>{data[0].class_name}</p>
            <CoachUserTable code={params.slug.substring(0, 6)}/>
        </>
        
    );
}