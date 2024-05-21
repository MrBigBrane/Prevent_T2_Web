import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, eq, eqValue) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    if(user){
        const { data, error } = await supabase
        .from(table)
        .select()
        .eq(eq, eqValue)
        .order('created_at', { ascending: false });
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