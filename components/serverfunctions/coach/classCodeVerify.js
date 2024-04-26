import { createClient } from '@/utils/supabase/server';

export default async function fetcher(table, code) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from(table)
    .select('code')
    .eq('code', code);

    // console.log(data);
    return data;
}