import { createClient } from '@/utils/supabase/server';

export default async function fetcher() {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from("lifestyle_coach_log")
    .select('created_at')
    .eq("user", user.id);

    // console.log(data);
    return data;
}