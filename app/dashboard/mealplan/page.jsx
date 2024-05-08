'use server';

import MealModal from "@/components/forms/plans/MealModal";
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
    .from('meal_plans')
     .select()
     .eq('user', user.id)
     .order('created_at', { ascending: true });




    return (
        <>
            <LinkButton href="/profile" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            <Box display="flex" alignContent="center">
                {searchParams?.add && <MuiSuccess severity="success">Meal Plan Successfully Added!</MuiSuccess>}
                {searchParams?.delete && <MuiSuccess severity="success">Meal Plan Successfully Deleted!</MuiSuccess>}
                {searchParams?.edit && <MuiSuccess severity="success">Meal Plan Successfully Edited!</MuiSuccess>}
                {data && data.map((item) => {
                    return <Box key={item.id} m={2}><MuiCard id={item.id} date={item.created_at} title={item.title} details={item.meal_plan} /></Box>
            })}
                
            </Box>
            <MealModal />
        </>
        
    )
}