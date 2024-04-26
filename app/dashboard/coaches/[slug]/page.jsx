'use server';

import { createClient } from "@/utils/supabase/server";
import ActivityTable from '@/components/tables/coachview/ActivityTable'
import CoachTable from '@/components/tables/coachview/CoachTable'



export default async function UserPage({ params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq("user", params.slug);

    return (
        <>
            <p>{data[0].first_name} {data[0].last_name}</p>
            <ActivityTable id={params.slug}/>
            <CoachTable id={params.slug} />
        </>
        
    );
}