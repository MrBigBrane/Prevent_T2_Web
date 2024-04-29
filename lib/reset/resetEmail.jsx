'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();
    
    await supabase.auth.updateUser({ email: formData.get('email') })


    redirect('/profile/settings'); 
    
}