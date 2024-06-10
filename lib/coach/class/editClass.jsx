'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();
    
    const { data, error } = await supabase
    .from('coach_codes')
    .update({ 
        class_name: formData.get('classname'),
        orgcode: formData.get('orgcode'),
        coachid: formData.get('coachid'),
        cohortid: formData.get('cohortid')
     })
     .select()
     .eq('code', formData.get('codeinput'))

     if(error) console.log(error);

    redirect(`?edit=true`); 
    
}