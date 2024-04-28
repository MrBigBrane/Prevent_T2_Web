'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();
    
    await supabase.auth.updateUser({ password: formData.get('password') })


    redirect('/profile/settings'); 
    
}