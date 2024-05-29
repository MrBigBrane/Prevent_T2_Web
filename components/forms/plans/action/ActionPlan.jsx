'use client';

import { useFormState } from 'react-dom'
import MuiTextArea from '../../../inputs/MuiTextArea'
import mealPlanAction from '@/lib/plans/actionPlanAction'
import editMealPlan from '@/lib/plans/editActionPlan'
import MuiButton from '@/components/buttons/MuiButton';
import MuiTextField from '@/components/inputs/MuiTextField';
import { useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

export default function MealPlan({ click, q1, q2, q3, rowId }) {
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
        <form id="mealPlanForm" name="mealPlanForm" action={formAction}>
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
          <label className="text-md" htmlFor="title">
            Question 1: What routine do you want to add, stop, or change?
          </label>
          <MuiTextArea
            id="q1"
            name="q1"
            label="Routine Change?"
            variant="outlined"
            type="text"
            defaultValue={q1 ? q1 : null}
            required
          />
          <label className="text-md" htmlFor="title">
            Question 2: What new routine do I want to try?
          </label>
          <MuiTextArea
            id="q2"
            name="q2"
            label="New routine?"
            type="text"
            defaultValue={q2 ? q2 : null}
            required
          />
          <label className="text-md" htmlFor="title">
            Question 3: What cue will help me remember my new routine?
          </label>
          <MuiTextArea
            id="q3"
            name="q3"
            label="Cues?"
            type="text"
            defaultValue={q3 ? q3 : null}
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