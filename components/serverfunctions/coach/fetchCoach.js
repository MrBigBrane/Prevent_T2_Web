import { createClient } from '@/utils/supabase/server';

export default async function fetchCoach(table) {
    const supabase = createClient();

    const {
    data: { user },
    } = await supabase.auth.getUser();

    if(user){
        const { data, error } = await supabase
        .from(table)
        .select()
        .eq("coach_user", user.id)
        .order('created_at', { ascending: true });

        return data;
    }
    else {
        const userFalse = {
            user: false
        }
        return userFalse;
    }
    
}