'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();
    
    console.log(formData.get('email'))

    
    const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get('email'), {
        redirectTo: 'nrivadpp.vercel.app/login/resetpassword',
    })

    if(!error){
      redirect('/login/forgotpassword?passwordreset=true'); 
    }
    else{
      redirect('/login/forgotpassword?passwordnotreset=true'); 
    }
    
    
}