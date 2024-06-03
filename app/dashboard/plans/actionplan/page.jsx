'use server';

import { createClient } from '@/utils/supabase/server';
import MuiCard from "@/components/display/MuiCard";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';
import { Box, Grid } from "@mui/material";
import { redirect } from "next/navigation";

export default async function ActionPlanPage({ searchParams }) {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('action_plans')
     .select()
     .eq('user', user.id)
     .order('created_at', { ascending: true });

    if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }


    return (
      <>
        <Box display="flex" alignContent="center">
          {searchParams?.add && (
            <MuiSuccess severity="success">
              Action Plan Successfully Added!
            </MuiSuccess>
          )}
          {searchParams?.delete && (
            <MuiSuccess severity="success">
              Action Plan Successfully Deleted!
            </MuiSuccess>
          )}
          {searchParams?.edit && (
            <MuiSuccess severity="success">
              Action Plan Successfully Edited!
            </MuiSuccess>
          )}
          <Grid container spacing={2}>
            {data &&
              data.map((item) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={item.id}>
                  <Box m={2}>
                    <MuiCard
                      id={item.id}
                      date={item.created_at}
                      q1={item.q1}
                      q2={item.q2}
                      q3={item.q3}
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </>
    );
}