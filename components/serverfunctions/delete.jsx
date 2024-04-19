'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function deleter({ table, id, page }) {
    const supabase = createClient();

    const { data, error } = await supabase.from(table).delete().eq('id', id);

    redirect(`/${page}`);
}