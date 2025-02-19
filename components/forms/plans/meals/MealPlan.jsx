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
            <LinearProgress color="success" />
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
              color="success"
            />
          ) : null}
          {rowId ? null : <MuiDateTime name="date" />}
          <Box sx={{ paddingLeft: 1, marginTop: 2, marginBottom: 1 }}>
            <MuiSelect
              name="mealType"
              field="Meal Type?"
              field1="Breakfast"
              field2="Lunch"
              field3="Dinner"
              field4="Snack"
              field5="Drink"
              field6="Other"
              variant="outlined"
              defaultValue={mealType ? mealType : null}
              required={true}
              style={{ width: "19.6%" }}
              color="success"
            />
            
          </Box>

          <MuiTextField
            id="item"
            name="item"
            label="Item"
            type="text"
            defaultValue={item ? item : null}
            required
            color="success"
          />
          <MuiTextField
            id="amount"
            name="amount"
            label="Amount (piece, volume, weight)"
            type="text"
            defaultValue={amount ? amount : null}
            required
            color="success"
          />
          <MuiTextField
            id="calories"
            name="calories"
            label="Calories"
            type="number"
            defaultValue={calories ? calories : null}
            required
            color="success"
          />
          <MuiButton
            label={rowId ? "Confirm Edit" : "Add Plan"}
            type="submit"
            startIcon={null}
            click={click ? click : handleLoading}
            style={{
              marginLeft: "8px",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            color="success"
          />
        </form>
      </>
    );
}