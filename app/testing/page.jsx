'use server';

import { Box, Grid } from '@mui/material';
import ActivityCard from '../../components/tables/users/activities/ActivityCard';

import { createClient } from '@/utils/supabase/server';


export default async function TestPage() {
  const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('activity_log')
      // try with {} if doesn't work without
      .select()
      .eq("user", user.id)
      .order('created_at', { ascending: true });


  return (
    <Grid container>
      {data &&
        data.map((row) => (
          <Grid item minWidth={150} xs={6} sm={2} md={4} padding={2} alignContent={"center"} key={row.id}>
          <ActivityCard
            key={row.id}
            title={row.activity}
            title1="Exercise Type"
            title2="Duration"
            title3="Difficulty"
            field1={row.exercise_type.title}
            field2={row.minutes}
            field3={row.difficulty.title}
          />
          </Grid>
        ))}
    </Grid>
  );
}
