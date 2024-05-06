'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('mealPlan')

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('meal_plans')
    .insert({ 
        meal_plan: myText,
        title: formData.get('title'),
        user: user.id
     })
     .select()

    if(!error) redirect('/profile/mealplan?add=success'); 
    else {
        console.log(error)
        redirect('/profile/mealplan?notadded=failed');
    }
    
}