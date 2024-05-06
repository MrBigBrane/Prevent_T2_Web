'use server';

import { createClient } from "@/utils/supabase/server";
import CoachingGraph from '@/components/graph/coachgraph/CoachingGraph'
import MinutesGraph from '@/components/graph/coachgraph/MinutesGraph'
import CoachTable from '@/components/tables/coachview/CoachTable'
import RemoveUserModal from '@/components/buttons/coaching/RemoveUser'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";
import { redirect } from "next/navigation";
import fetchCoach from "@/components/serverfunctions/coach/fetchCoach";


export default async function UserPage({ params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq("id", params.slug);

    let classCopy = Array.from(await fetchCoach('coach_codes'));
    console.log(classCopy)

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/dashboard/becomecoach?unauthorized=true')
    }

    return (
        <>
            
            <LinkButton href="/dashboard/coaches" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            <p style={{ float: 'left' }}>{data[0].first_name} {data[0].last_name}</p>
            <RemoveUserModal userId={params.slug} />
            <h1>Weight Graph</h1>
            <CoachingGraph userId={params.slug} />
            <h1>Minutes Graph</h1>
            <MinutesGraph userId={params.slug} />
            <CoachTable id={params.slug} />
        </>
        
    );
}