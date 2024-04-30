'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.updateUser({ email: formData.get('email') })

    if(!error){
        redirect('/profile/settings?emailreset=true'); 
    }
    else{
        redirect('/profile/settings?emailnotreset=true'); 
    }
    
    
}