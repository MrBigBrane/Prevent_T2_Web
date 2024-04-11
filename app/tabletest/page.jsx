// outputting data for testing purposes

import { createClient } from '@/utils/supabase/server';

  export default async function Notes() {
    const supabase = createClient();
    const { data: lifestyle_coach_log } = await supabase.from("lifestyle_coach_log").select();

    return <pre>{JSON.stringify(lifestyle_coach_log, null, 2)}</pre>
  }