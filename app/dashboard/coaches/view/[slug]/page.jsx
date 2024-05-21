'use server';

import { createClient } from "@/utils/supabase/server";

import CoachUserTable from '@/components/tables/coachview/classview/CoachUserTable'

import { redirect } from "next/navigation";
import fetchCoach from '@/components/serverfunctions/coach/fetchCoach';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";
import { Box, Typography } from "@mui/material";

export default async function UserPage({ params }) {

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
    
    return (
      <>
        <LinkButton
          href="/dashboard/coaches"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", left: "17rem", top: "5rem" }}
        />
        <LinkButton
          href={`/dashboard/coaches/view/${params.slug}/announcements`}
          label="Announcements"
          type={null}
          startIcon={null}
          style={{ position: "absolute", right: "1rem", top: "5rem" }}
        />
        <Typography variant="h5" style={{ textAlign: "center" }}>{data[0].class_name}</Typography>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
            bottompadding: "0px",
          }}
        >
            <CoachUserTable code={params.slug.substring(0, 6)} />
        </Box>
        
      </>
    );
}