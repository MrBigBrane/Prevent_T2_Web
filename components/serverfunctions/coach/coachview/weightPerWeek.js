import fetchUserData from './fetchUserData'

import { createClient } from "@/utils/supabase/server";

export default async function weightPerWeek(userId) {
    const supabase = createClient();

    let creationDate = Object.assign({}, await fetchUserData('profiles', 'user_created_at', userId))

    let { data, error } = await supabase.rpc("get_weekly_weight_average", {
        user_id: userId,
        user_creation_date: creationDate[0].user_created_at
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