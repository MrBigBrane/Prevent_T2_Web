'use client';

import { useFormState } from 'react-dom'
import MuiDateTime from '../../../inputs/MuiDateTime'
import mealPlanAction from '@/lib/plans/mealPlanAction'
import editMealPlan from '@/lib/plans/editMealPlan'
import MuiButton from '@/components/buttons/MuiButton';
import MuiTextField from '../../../inputs/MuiTextField';
import MuiSelect from '../../../inputs/MuiSelect';
import { useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

export default function MealPlan({ click, mealType, item, amount, calories, rowId }) {
    const [state, formAction] = useFormState(rowId ? editMealPlan : mealPlanAction, { message: null })
    const [loading, setLoading] = useState(false);

    function handleLoading() {
        setLoading(true);
    }
      
    return (
      <>
        {loading ? (
          <Box width={"100%"}>
            <LinearProgress color='success' />
          </Box>
        ) : null}
        <form action={formAction}>
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
            click={click ? click : handleLoading}
          />
        </form>
      </>
      
    );
}