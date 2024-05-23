'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.updateUser({
      user_metadata: {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
      }
    });

    if(!error){
        redirect('/profile/settings?emailreset=true'); 
    }
    else{
        redirect('/profile/settings?emailnotreset=true'); 
    }
    
    
}