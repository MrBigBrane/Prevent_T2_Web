'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/users/editCoachTableAction.jsx';
import tableAction from '@/lib/users/lifestyleTableAction';
import MuiButton from '@/components/buttons/MuiButton';
import { useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

export default function LifestyleCoachLogPage({ field1, field2, field3, rowId, click }) {
    const [state, formAction] = useFormState(rowId ?  editTableAction : tableAction, { message: null })
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
          {field3 ? (
            <MuiTextField
              defaultValue={field3}
              name="minutesShown"
              id="minutesShown"
              label="Exercise Minutes"
              variant="outlined"
              type="number"
              disabled={true}
              required
            />
          ) : null}
          <MuiTextField
            defaultValue={field1}
            name="weight"
            id="weight"
            label="Current Weight"
            variant="outlined"
            type="number"
            required={true}
          />
          <MuiSelect
            defaultValue={field2}
            name="attendance"
            field="Attendance"
            field1="Yes"
            field2="No"
            field3="Online"
            required={true}
          />
          <MuiButton
            label={rowId ? "Confirm Edit" : "Submit"}
            type="submit"
            startIcon={null}
            click={click ? click : handleLoading}
          />
          <MuiTextField
            defaultValue={rowId}
            name="rowId"
            id="rowId"
            label="id"
            variant="filled"
            type="hidden"
          />
        </form>
      </>
    );
}