'use server';

import { createClient } from '@/utils/supabase/server';
import MuiTable from '../MuiTable';

export default async function CoachTable({ id }) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('lifestyle_coach_log')
      // try with {} if doesn't work without
      .select()
      .eq("user", id)
      .order('created_at', { ascending: true });

      return (
        <MuiTable
      page="coachlog"
      title={null}
      table='lifestyle_coach_log'
      data={data}
      field2="attendance"
      title2="Attendance"
      field1="current_weight"
      title1="Weight"
      field3={null}
      title3={null}
      footer={true}
    />

      )
    
}