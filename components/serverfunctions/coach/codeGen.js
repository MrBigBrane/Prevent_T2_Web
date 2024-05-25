'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function codeGen(prevState, formData) {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('coach_codes')
    .insert({ 
        code: result,
        coach_user: user.id,
        class_name: formData.get('classname')
     })
     .select()

     

    redirect('/coaches?classcreated=true'); 
    
      
}