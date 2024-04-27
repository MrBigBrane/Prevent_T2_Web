import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, filter, userId) {
    const supabase = createClient();

    
    const { data, error } = await supabase
    .from(table)
    .select(filter)
    .eq("user", userId)
    .order('created_at', { ascending: true });

    return data;
    
    

    // console.log(data);
}