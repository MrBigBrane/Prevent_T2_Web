import fetcher from "./fetcher";
import getCurrentUser from './getCurrentUser'

import { createClient } from "@/utils/supabase/server";

export default async function weightCreator() {
    const supabase = createClient();

    let userData = Object.assign({}, await getCurrentUser());

    let { data, error } = await supabase.rpc("get_weekly_weight_average", {
        user_id: userData.id,
        user_creation_date: userData.created_at
    });
    if (error) console.error(error);

    let weightGraph = data;

    let weeks = []
    let weight = []

    weightGraph.map((row) => {
        weeks.push(row.week_start)
        weight.push(row.avg_weight)
    })

    weightGraph = [weight, weeks]
    return weightGraph
}