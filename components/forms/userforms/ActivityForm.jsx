'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/users/editActivitiesTableAction.jsx';
import tableAction from '@/lib/users/activitiesTableAction.jsx';
import MuiButton from '@/components/buttons/MuiButton';
import { Box, LinearProgress } from '@mui/material';
import { useState } from 'react';


export default function ActivityLogPage({ field1, field2, field3, rowId, click }) {
    const [loading, setLoading] = useState(false)
    const [state, formAction] = useFormState(rowId ? editTableAction : tableAction, { message: null })

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
          <MuiTextField
            defaultValue={field1}
            name="activity"
            id="activity"
            label="Activity Name"
            variant="outlined"
            type="text"
            required={true}
          />
          <MuiTextField
            defaultValue={field2}
            name="minutes"
            id="minutes"
            label="Activity Minutes"
            variant="outlined"
            type="number"
            required={true}
          />
          <MuiSelect
            defaultValue={field3}
            name="difficulty"
            field="Perceived Difficulty"
            field1="Easy"
            field2="Medium"
            field3="Difficult"
            required={true}
          />
          <MuiButton
            label={rowId ? "Confirm Edit" : "Add Activity"}
            type="submit"
            startIcon={null}
            click={click ? click : handleLoading}
          />
          {rowId ? (
            <MuiTextField
              defaultValue={rowId}
              name="rowId"
              id="rowId"
              label="id"
              variant="filled"
              type="hidden"
            />
          ) : null}
        </form>
      </>
    );
}