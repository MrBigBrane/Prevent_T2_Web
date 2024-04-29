import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, filter) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    if(user){
        const { data, error } = await supabase
        .from(table)
        .select(filter)
        .eq("user", user.id)
        .order('created_at', { ascending: true });
        return data;
    }
    else{
        const userFalse = {
            user: false
        }
        return userFalse;
    }
    

    // console.log(data);
}