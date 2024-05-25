'use server';

import { createClient } from "@/utils/supabase/server";
import CoachingGraph from '@/components/graph/coachgraph/CoachingGraph'
import MinutesGraph from '@/components/graph/coachgraph/MinutesGraph'
import CoachTable from '@/components/tables/coachview/CoachTable'
import RemoveUserModal from '@/components/buttons/coaching/RemoveUser'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";
import { redirect } from "next/navigation";
import fetchCoach from "@/components/serverfunctions/coach/fetchCoach";
import { Box, Paper, Typography } from "@mui/material";


export default async function UserPage({ params }) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq("id", params.slug);

    let classCopy = Array.from(await fetchCoach('coach_codes'));

    if(!user){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/dashboard/becomecoach?unauthorized=true')
    }
    

    console.log('yo')
    console.log(!user.id)

    return (
      <Box width={"100%"}>
        <LinkButton
          href={`/dashboard/coaches/${params.students}`}
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          padding={2}
          style={{ position: "absolute", left: "17rem", top: "5rem" }}
        />
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {data[0].first_name} {data[0].last_name}
        </Typography>
        <RemoveUserModal
          userId={params.slug}
          style={{ position: "absolute", right: "1rem", top: "5rem" }}
        />
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
            bottompadding: "0px",
          }}
        >
          <Paper elevation={10}>
            <Typography variant="h6" component="h2" sx={{ padding: "20px" }}>
              Weight Progress
            </Typography>
            <CoachingGraph userId={params.slug} />
          </Paper>
        </Box>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
            bottompadding: "0px",
          }}
        >
          <Paper elevation={10}>
            <Typography variant="h6" component="h2" sx={{ padding: "20px" }}>
              Minute Progress
            </Typography>
            <MinutesGraph userId={params.slug} />
          </Paper>
        </Box>

        <CoachTable id={params.slug} />
      </Box>
    );
}