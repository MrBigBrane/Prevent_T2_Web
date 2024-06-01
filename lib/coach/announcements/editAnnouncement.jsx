'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('title')
    
    const { data, error } = await supabase
    .from('announcements')
    .update({ 
        title: myText,
        message: formData.get('announcement'),
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    if(!error) redirect('?edit=success'); 
    else {
        console.log(error)
        redirect('?notedit=failed');
    }
    
}