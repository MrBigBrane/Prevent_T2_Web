'use server';

import { createClient } from "@/utils/supabase/server";
import fetchCoach from "@/components/serverfunctions/coach/fetchCoach";
import Link from "next/link";
import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import MuiAvatar from "@/components/buttons/avatar/MuiAvatar";
import { redirect } from "next/navigation";

export default async function StudentsPage({ params }) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq("class_codes", params.students.substring(0, 6));

    let classCopy = Array.from(await fetchCoach('coach_codes'));
    // add check for if coach owns that class

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/profile/becomecoach?unauthorized=true')
    }
    if(!data[0]){
        redirect('/dashboard/coaches?fake=true')
    }
    if(!user.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
      <>
        <Typography variant="h5" textAlign={"center"} marginBottom={2}>
          Students
        </Typography>
        <Grid
            // display="grid"
            
            // direction="row"
            container
            spacing={0}
          >
        {data.map((row) => (
          
        <Grid item minWidth={150} xs={6} sm={2} md={1} padding={2} alignContent={"center"} key={row.id}>
            <Paper elevation={10} >
              <Box textAlign={"center"}>
              <Link
                href={`/dashboard/coaches/${params.students}/${row.id}`}
                key={row.id}
              >
                  <IconButton size="large" style={{ textAlign: "center" }} aria-haspopup="true">
                    <MuiAvatar
                      name={`${row.first_name} ${row.last_name}`}
                      style={{ width: 75, height: 75 }}
                    />
                  </IconButton>
              </Link>
              </Box>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {row.first_name}
                <br />
                {row.last_name}
              </Typography>
            </Paper>
        </Grid>
            
          
        ))}
        </Grid>
      </>
    );
}