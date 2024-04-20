import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, filter) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from(table)
    .select(filter)
    .eq("user", user.id)
    .order('created_at', { ascending: true });

    // console.log(data);
    return data;
}