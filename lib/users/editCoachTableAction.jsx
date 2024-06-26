'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('lifestyle_coach_log')
    .update({
        current_weight: formData.get('weight'),
        attendance: formData.get("attendance"),
        user: user.id
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    redirect('/dashboard/coachlog?edit=true'); 
    
}