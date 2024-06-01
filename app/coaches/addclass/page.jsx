'use server';

import AddClassCoach from "@/components/forms/coaching/AddClass";
import { createClient } from "@/utils/supabase/server";
import { Box, Paper } from "@mui/material";
import { redirect } from "next/navigation";

export default async function AddClass() {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

      if(!user?.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <>
        <Box sx={{ width: "30%", margin: "auto", display: "flex", justifyContent: "center" }}>
          <Paper elevation={10} square={false} >
            <Box width={"100%"}>
                <AddClassCoach>Add Class</AddClassCoach>
            </Box>
          </Paper>
        </Box>
      </>
    );
}