'use server';

import { createClient } from "@/utils/supabase/server";

export default async function UserPage({ params }) {
    console.log(params.slug.substring(0, 6))

    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
    .select()
    .eq('code', params.slug.substring(0, 6));

    console.log(data);

    return (
        <>
            <p>{data[0].class_name}</p>
        </>
        
    );
}