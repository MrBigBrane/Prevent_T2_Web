'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('q1')
    
    const { data, error } = await supabase
    .from('action_plans')
    .update({ 
        q1: myText,
        q2: formData.get('q2'),
        q3: formData.get('q3')
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    if(!error) redirect('/dashboard/actionplan?edit=success'); 
    else {
        console.log(error)
        redirect('/dashboard/actionplan?notedit=failed');
    }
    
}