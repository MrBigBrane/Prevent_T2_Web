'use server';

import MealModal from "@/components/forms/plans/action/ActionModal";
import { createClient } from '@/utils/supabase/server';
import MuiCard from "@/components/display/MuiCard";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';
import { Box } from "@mui/material";
import LinkButton from "@/components/buttons/LinkButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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




    return (
      <>
        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: 'absolute', left: "1rem", top: "5rem" }}
        />
        <Box display="flex" alignContent="center">
          {searchParams?.add && (
            <MuiSuccess severity="success">
              Meal Plan Successfully Added!
            </MuiSuccess>
          )}
          {searchParams?.delete && (
            <MuiSuccess severity="success">
              Meal Plan Successfully Deleted!
            </MuiSuccess>
          )}
          {searchParams?.edit && (
            <MuiSuccess severity="success">
              Meal Plan Successfully Edited!
            </MuiSuccess>
          )}
          {data &&
            data.map((item) => {
              return (
                <Box key={item.id} m={2}>
                  <MuiCard
                    id={item.id}
                    date={item.created_at}
                    q1={item.q1}
                    q2={item.q2}
                    q3={item.q3}
                  />
                </Box>
              );
            })}
        </Box>
        <MealModal />
      </>
    );
}