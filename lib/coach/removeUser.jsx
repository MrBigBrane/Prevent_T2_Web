'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function removeUser(userId) {
    const supabase = createClient();

    

    const { error } = await supabase
    .from('profiles')
    .delete()
    .eq('user', userId) 
    
    
    redirect('/dashboard/coaches')
    
}