'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function mealPlanAction(prevState, formData) {
    const supabase = createClient();

    const mealTypes = [
        { icon: "coffee", title: "Breakfast" },
        { icon: "hamburger", title: "Lunch" },
        { icon: "silverware-fork-knife", title: "Dinner" },
        { icon: "food-fork-drink", title: "Snack" },
        { icon: "bottle-wine", title: "Drink"},
        { icon: "food-variant", title: "Other" },
  
      ];

    const meals = ["Breakfast", "Lunch", "Dinner", "Snack", "Drink", "Other"]

    const index = meals.indexOf(formData.get('mealType'))
    
    const { data, error } = await supabase
    .from('meal_plans')
    .update({ 
        meal_type: mealTypes[index],
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