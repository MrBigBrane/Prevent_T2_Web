import { createClient } from "@/utils/supabase/server";


export default async function minutesPerWeek(userId) {
    const supabase = createClient();

    let { data: creationDate, error: creationDateError } = await supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .order("user_created_at", { ascending: true });

    let { data, error } = await supabase.rpc("get_weekly_activity", {
        user_id: userId,
        user_creation_date: creationDate[0].user_created_at
    });

    if (error) {
        console.log("what's up")
        console.log(error);
    console.log('hello')

    }

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