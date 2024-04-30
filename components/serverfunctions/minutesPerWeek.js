import fetcher from "./fetcher";
import getCurrentUser from "./getCurrentUser";

import { createClient } from "@/utils/supabase/server";

export default async function dateCreator() {
    const supabase = createClient();

    let userData = Object.assign({}, await getCurrentUser());
    let { data, error } = await supabase.rpc("get_weekly_activity", {
        user_id: userData.id,
        user_creation_date: userData.created_at
    });
    if (error) console.error(error);

    let minuteGraph = data;

    let weeks = []
    let minutes = []
    minuteGraph.map((row) => {
        weeks.push(row.week_start)
        minutes.push(row.total_minutes)
    })
    minuteGraph = [weeks, minutes];
    return minuteGraph;
}