'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    console.log(formData.get('email'))

    const { data, error } = await supabase.auth.updateUser({ email: formData.get('email') })

    if(!error){
        redirect('/profile?emailreset=true'); 
    }
    else{
        redirect('/profile?emailnotreset=true'); 
    }
    
    
}