'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function mealPlanAction(prevState, formData) {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();
    const date = formData.get('date').substring(0, 10)
    const time = formData.get('date').substring(11)
    console.log(date)
    console.log(time)

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
    .insert({ 
        created_at: date,
        time: time,
        meal_type: mealTypes[index],
        item: formData.get('item'),
        amount: formData.get('amount'),
        calories: formData.get('calories'),
        user: user.id
     })
     .select()

    if(!error) redirect('/dashboard/plans/mealplan?add=success'); 
    else {
        console.log(error)
        redirect('/dashboard/plans/mealplan?add=failed');
    }
    
}