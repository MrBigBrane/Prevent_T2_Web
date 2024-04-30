import fetchUserData from './fetchUserData'

import { createClient } from "@/utils/supabase/server";


export default async function dateCreator(userId) {
    const supabase = createClient();

    let creationDate = Object.assign({}, await fetchUserData('profiles', 'user_created_at', userId))

    let { data, error } = await supabase.rpc("get_weekly_activity", {
        user_id: userId,
        user_creation_date: creationDate[0].user_created_at
    });
    if (error) console.error(error);

    let minuteGraph = data;

    let weeks = []
    let minutes = []
    minuteGraph.map((row) => {
        weeks.push(row.week_start)
        minutes.push(row.total_minutes)
    })
    minuteGraph = [minutes, weeks];
    return minuteGraph;
}