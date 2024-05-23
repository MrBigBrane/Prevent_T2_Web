'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
  console.log('testing')
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("lifestyle_coach_log")
      .insert({
        current_weight: formData.get('weight'),
        attendance: formData.get("attendance"),
        user: user.id
      })
      .select();

      console.log(error)

    redirect('/dashboard/coachlog?add=true'); 
    
    
}