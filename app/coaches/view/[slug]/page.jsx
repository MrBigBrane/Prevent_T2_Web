'use server';

import { createClient } from "@/utils/supabase/server";

import CoachUserTable from '@/components/tables/coachview/classview/CoachUserTable'

import { redirect } from "next/navigation";
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import { Box, Typography } from "@mui/material";
import CsvButton from '@/components/buttons/download/CsvButton'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

export default async function UserPage({ searchParams, params }) {

    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
    .select()
    .eq('code', params.slug.substring(0, 6));

    let classCopy = Array.from(await fetchCoach('coach_codes'));

    if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/profile/becomecoach?unauthorized=true')
    }
    let matches = false;
    for(let i = 0; i < classCopy.length; i++){
        if(classCopy[i].code === params.slug.substring(0, 6)){
            matches = true
            break;
        }
      }
    if(!matches){
        redirect('/coaches?fake=true')
    }
    
    return (
      <>
        {searchParams?.edit &&  <MuiSuccess severity="success">Class Name Edited!</MuiSuccess>}
        <Typography variant="h5" style={{ textAlign: "center" }}>{data[0].class_name}</Typography>
        <CsvButton
          searchValue={params.slug.substring(0, 6)}
          style={{ position: "absolute", right: "3rem", bottom: "2rem" }}
        />
     
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
            bottompadding: "0px",
            // marginTop: "3rem",
          }}
        >
          <CoachUserTable code={params.slug.substring(0, 6)} />
        </Box>
      </>
    );
}