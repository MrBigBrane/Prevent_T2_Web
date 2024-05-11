'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function mealPlanAction(prevState, formData) {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

    const myText = formData.get('mealType')
    const date = formData.get('date').substring(0, 10)
    const time = formData.get('date').substring(11)
    console.log(date)
    console.log(time)
    
    const { data, error } = await supabase
    .from('meal_plans')
    .insert({ 
        created_at: date,
        time: time,
        meal_type: myText,
        item: formData.get('item'),
        amount: formData.get('amount'),
        calories: formData.get('calories'),
        user: user.id
     })
     .select()

    if(!error) redirect('/dashboard/mealplan?add=success'); 
    else {
        console.log(error)
        redirect('/dashboard/mealplan?add=failed');
    }
    
}