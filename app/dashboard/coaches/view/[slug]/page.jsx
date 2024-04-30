'use server';

import { createClient } from "@/utils/supabase/server";

import CoachUserTable from '@/components/tables/coachview/classview/CoachUserTable'

export default async function UserPage({ params }) {

    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
    .select()
    .eq('code', params.slug.substring(0, 6));
    
    return (
        <>
            <p>{data[0].class_name}</p>
            <CoachUserTable code={params.slug.substring(0, 6)}/>
        </>
        
    );
}