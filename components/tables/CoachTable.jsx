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
      .eq("user", user.id);

      return (
        <MuiTable
      page="coach"
      table={table}
      data={data}
      field1="attendance"
      title1="Attendance"
      field2="current_weight"
      title2="Weight"
      field3="minutes"
      title3="Exercise Minutes"
    />

      )
    
}