'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('mealPlan')
    
    const { data, error } = await supabase
    .from('meal_plans')
    .update({ 
        meal_plan: myText,
        title: formData.get('title'),
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    if(!error) redirect('/profile/mealplan?edit=success'); 
    else {
        console.log(error)
        redirect('/profile/mealplan?notedit=failed');
    }
    
}