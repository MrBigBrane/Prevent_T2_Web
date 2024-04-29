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
      page="coachlog"
      title={null}
      table={table}
      data={data}
      field2="attendance"
      title2="Attendance"
      field3={null}
      title3={null}
      field1="current_weight"
      title1="Weight"
    />

      )
    
}