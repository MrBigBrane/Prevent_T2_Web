'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function mealPlanAction(prevState, formData) {
    const supabase = createClient();

    const myText = formData.get('mealType')
    
    const { data, error } = await supabase
    .from('meal_plans')
    .update({ 
        meal_type: myText,
        item: formData.get('item'),
        amount: formData.get('amount'),
        calories: formData.get('calories'),
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

    if(!error) redirect('/dashboard/plans/mealplan?edit=success'); 
    else {
        console.log(error)
        redirect('/dashboard/plans/mealplan?notedit=failed');
    }
    
}