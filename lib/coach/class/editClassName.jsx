'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    console.log(formData.get('className'))
    console.log(formData.get('rowId'))
    
    const { data, error } = await supabase
    .from('coach_codes')
    .update({ 
        class_name: formData.get('className'),
     })
     .select()
     .eq('code', formData.get('rowIdinput'))

     if(error) console.log(error);

    redirect(`?edit=true`); 
    
}