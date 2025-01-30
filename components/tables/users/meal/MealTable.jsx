'use server';


import { createClient } from '@/utils/supabase/server';
import MuiTable from '@/components/tables/MuiTable';


export default async function CoachTable() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('meal_plans')
      // try with {} if doesn't work without
      .select()
      .eq("user", user.id)
      .order('created_at', { ascending: true });

      return (
        <MuiTable
          page="mealplan?delete=true"
          title="Activity Logger"
          data={data}
          field1="meal_type"
          title1="Meal Type"
          field2="item"
          title2="Item"
          field3="amount"
          title3="Amount"
          field4="calories"
          title4="Calories"
        />
      );
    
}