'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('q1')

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('action_plans')
    .insert({ 
        q1: myText,
        q2: formData.get('q2'),
        q3: formData.get('q3'),
        user: user.id
     })
     .select()

    if(!error) redirect('/dashboard/actionplan?add=success'); 
    else {
        console.log(error)
        redirect('/dashboard/actionplan?notadded=failed');
    }
    
}