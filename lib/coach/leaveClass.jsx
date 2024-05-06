'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function leaveClass() {

    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
    .from('profiles')
    .delete()
    .eq('id', user.id) 
    
    
    redirect('/profile/joinclass?left=true')
    
}