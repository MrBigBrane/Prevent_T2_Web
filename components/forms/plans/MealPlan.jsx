'use client';

import { useFormState } from 'react-dom'
import MuiTextArea from '../../inputs/MuiTextArea'
import mealPlanAction from '@/lib/plans/mealPlanAction'
import editMealPlan from '@/lib/plans/editMealPlan'
import MuiButton from '@/components/buttons/MuiButton';
import MuiTextField from '@/components/inputs/MuiTextField';

export default function MealPlan({ click, title, details, rowId }) {
    const [state, formAction] = useFormState(rowId ? editMealPlan : mealPlanAction, { message: null })

      
    return (
      <form action={formAction}>
        {rowId ? <MuiTextField
          defaultValue={rowId}
          name="rowId"
          id="rowId"
          label=""
          variant="filled"
          type='hidden'
        /> : null}
        <MuiTextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          type="text"
          defaultValue={title}
          required
        />

        <MuiTextArea
          id="mealPlan"
          name="mealPlan"
          label="Meal Plan"
          type="text"
          defaultValue={details}
          required
        />
        <MuiButton
          label={rowId ? "Confirm Edit" : "Add Plan"}
          type="submit"
          startIcon={null}
          click={click}
        />
      </form>
    );
}