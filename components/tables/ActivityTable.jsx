'use server';

import { createClient } from '@/utils/supabase/server';
import MuiTable from './MuiTable';

export default async function CoachTable({ table }) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from(table)
      // try with {} if doesn't work without
      .select()
      .eq("user", user.id)
      .order('created_at', { ascending: true });

      return (
        <MuiTable
          page="activities?delete=true"
          title="Activity Logger"
          table={table}
          data={data}
          field1="activity"
          title1="Activity Name"
          field2="minutes"
          title2="Minutes"
          field3="difficulty"
          title3="Perceived Difficulty"
        />
      );
    
}