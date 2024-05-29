'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function removeUser(classCode) {
    const supabase = createClient();

    console.log(classCode)

    const { data, error } = await supabase
    .from('coach_codes')
    .delete()
    .eq('code', classCode)
    
    const users = await supabase
    .from('profiles')
    .delete()
    .eq('class_codes', classCode);

    console.log(users.data);
    console.log(data)
    
    if(error) console.log(error);
    if(users.error) console.log(users.error);

    redirect('/coaches?classdeleted=true')
    
}