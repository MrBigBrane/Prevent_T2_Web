'use server';

import { createClient } from '@/utils/supabase/server';

export default async function Invite({ params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
     .select()
     .eq('code', params.slug.substring(0, 6))

     console.log(data)

    return (
        <div>
            Class Name: {data[0].class_name}
            <br />
            Class Code: {data[0].code}
        </div>
    )
}