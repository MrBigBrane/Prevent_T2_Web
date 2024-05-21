'use server';

import { Grid, Paper, Typography } from "@mui/material";
import { createClient } from '@/utils/supabase/server';
import MuiCard from "@/components/display/announcements/MuiCard"
import AddAnnouncement from "@/components/forms/coaching/announcements/AddAnnouncement"

export default async function Announcements() {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

    let profile = await supabase
    .from('profiles')
    .select('class_codes')
    .eq("id", user.id);

    console.log(profile.data[0].class_codes)
    
    const { data, error } = await supabase
    .from('announcements')
     .select()
     .eq('class_code', profile?.data[0].class_codes)
     .order('created_at', { ascending: false });
    
     console.log(data.length);

     const counter = await supabase
     .from('notification_counter')
     .update({
         counter: data.length
     })
     .eq('user', user.id)



    return (
        <Grid width={"90%"}>
            <Typography variant="h5" style={{ textAlign: "center", marginBottom: "1rem" }}>Announcements</Typography>
            {data[0] && data.map((item) => {
                return <MuiCard key={item.id} id={item.id} date={`${item.created_at.substring(0, 10)} ${item.created_at.substring(11, 19)}`} title={item.title} body={item.message} />
            })}
            {!data[0] && <Typography variant="h6" style={{ textAlign: "center", marginTop: "1rem" }}>No announcements yet!</Typography>}
        </Grid>
    )
}