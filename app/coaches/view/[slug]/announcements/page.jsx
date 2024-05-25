'use server';

import { Grid, Paper, Typography } from "@mui/material";
import { createClient } from '@/utils/supabase/server';
import MuiCard from "@/components/display/announcements/MuiCard"
import AddAnnouncement from "@/components/forms/coaching/announcements/AddAnnouncement"

export default async function Announcements({ params }) {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('announcements')
     .select()
     .eq('class_code', params.slug.substring(0, 6))
     .order('created_at', { ascending: false });

     console.log(params.slug.substring(0,6))

     if(!user.id){
        redirect('/login?message=Unauthorized access! Please login first.')
    }

    return (
        <Grid width={"100%"}>
            <Typography variant="h5" style={{ textAlign: "center", marginBottom: "1rem" }}>Announcements</Typography>
            <AddAnnouncement style={{ position: "absolute", right: "1rem", top: "5rem" }} code={params.slug.substring(0, 6)}/>
            {data && data.map((item) => {
                return <MuiCard key={item.id} id={item.id} date={`${item.created_at.substring(0, 10)} ${item.created_at.substring(11, 19)}`} title={item.title} body={item.message} />
            })}
            {!data && <Typography variant="h6" style={{ textAlign: "center", marginTop: "1rem" }}>No announcements yet!</Typography>}
        </Grid>
    )
}