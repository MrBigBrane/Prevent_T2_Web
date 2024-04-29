'use server';

import { createClient } from '@/utils/supabase/server';
import MuiTable from '../MuiTable';

export default async function CoachTable({ id }) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('activity_log')
      // try with {} if doesn't work without
      .select()
      .eq("user", id)
      .order('created_at', { ascending: true });

      return (
        <MuiTable
          page="activities"
          title="Activity Logger"
          table='activity_log'
          data={data}
          field1="activity"
          title1="Activity Name"
          field2="minutes"
          title2="Minutes"
          field3="difficulty"
          title3="Perceived Difficulty"
          footer={true}
        />
      );
    
}