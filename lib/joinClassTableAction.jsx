'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import classCodeVerify from '@/components/serverfunctions/coach/classCodeVerify'


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    let classCodeVerification = Object.assign({}, await classCodeVerify('coach_codes', formData.get('classcode')));

    if(classCodeVerification){
        const {
        data: { user },
        } = await supabase.auth.getUser();

        const { data, error } = await supabase
        .from('profiles')
        .insert({ 
            class_codes: formData.get('classcode'),
            user: user.id,
            user_created_at: user.created_at,
            first_name: user.user_metadata.first_name,
            last_name: user.user_metadata.last_name
        })
        .select()

        redirect('/dashboard/activities'); 
    }
    else {
        redirect('/dashboard/joinclass')
    }
    
    
}