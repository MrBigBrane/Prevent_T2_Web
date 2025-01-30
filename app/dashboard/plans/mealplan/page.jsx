'use server'

import MealTable from "@/components/tables/users/meal/MealTable";
import { Typography } from "@mui/material";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MealStats from "../../../../components/tables/users/meal/MealStats";

export default async function MealPlanPage({ searchParams }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

    if(!user?.id){
      redirect("/login?message=Unauthorized access! Please login first.");
    }
  
  const { data, error } = await supabase
  .from("meal_plans")
  // try with {} if doesn't work without
  .select()
  .eq("user", user.id)
  .order('created_at', { ascending: true });

    return (
      <>
        {searchParams?.add && (
          <MuiSuccess severity="success">Activity Added!</MuiSuccess>
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
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Meal Plan
        </Typography>
        <MealTable />
        <Box
          style={{ width: "95%", textAlign: "center" }}
          marginTop={4}
          marginLeft={1}
          marginRight={1}
        >
          <MealStats data={data} />
        </Box>
      </>
    );
}