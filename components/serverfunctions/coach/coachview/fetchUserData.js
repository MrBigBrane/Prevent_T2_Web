import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, filter, userId) {
    const supabase = createClient();

    
    const { data, error } = await supabase
    .from(table)
    .select(filter)
    .eq("id", userId)
    .order('user_created_at', { ascending: true });

    if(error) {
      console.error(error);
    //   console.log("hello");
    }


    return data;
    
    

    // console.log(data);
}