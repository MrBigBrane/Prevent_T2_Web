// outputting data for testing purposes

import { createClient } from '@/utils/supabase/server';

  export default async function Notes() {
    const supabase = createClient();
    const { data: activity_log } = await supabase.from("activity_log").select();

    return <pre>{JSON.stringify(activity_log, null, 2)}</pre>
  }