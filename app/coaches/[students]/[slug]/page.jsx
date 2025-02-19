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
import CoachStats from "@/components/tables/users/coach/CoachStats";


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

    const coachLog = await supabase
      .from("lifestyle_coach_log")
      // try with {} if doesn't work without
      .select()
      .eq("user", params.slug)
      .order("created_at", { ascending: true });

    if(!user){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(classCopy.user === false){
        redirect('/login?message=Unauthorized access! Please login first.')
    }
    else if(!classCopy[0]){
        redirect('/profile/becomecoach?unauthorized=true')
    }
    let matches = false;
    for(let i = 0; i < classCopy.length; i++){
        if(classCopy[i].code === data[0].class_codes.substring(0, 6)){
            matches = true
            break;
        }
      }
    if(!matches){
        redirect('/coaches?fake=true')
    }

    return (
      <Box width={"100%"}>
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

        <Box
          style={{ width: "95%", textAlign: "center" }}
          marginTop={4}
          marginLeft={1}
          marginRight={1}
        >
          <CoachStats data={coachLog.data} />
        </Box>
      </Box>
    );
}