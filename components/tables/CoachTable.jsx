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
      page="coach"
      title={null}
      table={table}
      data={data}
      field3="attendance"
      title3="Attendance"
      field2="current_weight"
      title2="Weight"
      field1="minutes"
      title1="Exercise Minutes"
    />

      )
    
}