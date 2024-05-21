'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(formData.get("class_code"))

    const { data, error } = await supabase
      .from("announcements")
      .insert({
        message: formData.get("announcement"),
        user: user.id,
        class_code: formData.get("class_codeinput"),
        title: formData.get("title")
      })
      .select();

    console.log(error)

    if(!error) redirect('?add=true'); 
    
    
}