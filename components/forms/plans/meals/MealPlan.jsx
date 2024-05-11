'use client';

import { useFormState } from 'react-dom'
import MuiDateTime from '../../../inputs/MuiDateTime'
import mealPlanAction from '@/lib/plans/mealPlanAction'
import editMealPlan from '@/lib/plans/editMealPlan'
import MuiButton from '@/components/buttons/MuiButton';
import MuiTextField from '../../../inputs/MuiTextField';
import MuiSelect from '../../../inputs/MuiSelect';

export default function MealPlan({ click, mealType, item, amount, calories, rowId }) {
    const [state, formAction] = useFormState(rowId ? editMealPlan : mealPlanAction, { message: null })

      
    return (
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form id="mealPlanForm" name="mealPlanForm" action={formAction} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          {rowId ? (
            <MuiTextField
              defaultValue={rowId}
              name="rowId"
              id="rowId"
              label=""
              variant="filled"
              type="hidden"
            />
          ) : null}
          {rowId ? <br /> : <MuiDateTime name="date" />}
          <MuiSelect
            name="mealType"
            field="Meal Type?"
            field1="Breakfast"
            field2="Lunch"
            field3="Dinner"
            field4="Snack"
            variant="outlined"
            defaultValue={mealType ? mealType : null}
            required={true}
          />
          <MuiTextField
            id="item"
            name="item"
            label="Item"
            type="text"
            defaultValue={item ? item : null}
            required
          />
          <MuiTextField
            id="amount"
            name="amount"
            label="Amount (piece, volume, weight)"
            type="text"
            defaultValue={amount ? amount : null}
            required
          />
          <MuiTextField
            id="calories"
            name="calories"
            label="Calories"
            type="number"
            defaultValue={calories ? calories : null}
            required
          />
          <MuiButton
            label={rowId ? "Confirm Edit" : "Add Plan"}
            type="submit"
            startIcon={null}
            click={click}
          />
        </form>
      </div>
      
    );
}