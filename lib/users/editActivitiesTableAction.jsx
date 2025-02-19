'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const exerciseTypes = [
      { icon: "run", title: "Run" },
      { icon: "walk", title: "Walk" },
      { icon: "swim", title: "Swim" },
      { icon: "weight", title: "Weight Training" },
      { icon: "yoga", title: "Pilates" },
      { icon: "bike", title: "Bike" },
      { icon: "jump-rope", title: "Crossfit" },
      { icon: "human", title: "Calisthenics" },
      { icon: "adjust", title: "Other" },
    ]

    const perceivedDifficulty = [
      { icon: "human-handsdown", title: "Easy" },
      { icon: "human", title: "Medium" },
      { icon: "human-handsup", title: "Difficult" },
    ]

    const exercises = ["Run", "Walk", "Swim", "Weight Training", "Pilates", "Bike", "Crossfit", "Calisthenics", "Other"]
    const difficulties = ["Easy", "Medium", "Difficult"]

    const index = exercises.indexOf(formData.get('exercisetype'))

    const index2 = difficulties.indexOf(formData.get('difficulty'))
    
    const { data, error } = await supabase
    .from('activity_log')
    .update({ 
        minutes: formData.get('minutes'),
        difficulty: perceivedDifficulty[index2],
        activity: formData.get('activity'),
        exercise_type: exerciseTypes[index],
        user: user.id
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    redirect('/dashboard/activities?edit=true'); 
    
}