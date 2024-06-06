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
          {minutes1 || minutes1 === 0 ? (
            <MuiSelect
              name="minutesshown"
              id="minutesShown"
              label="Exercise Minutes"
              variant="outlined"
              type="number"
              disabled={true}
              required
              color="success"
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
            color="success"
          />
          <Box marginLeft={"8px"} paddingBottom={2} paddingTop={1}>
            <MuiSelect
              defaultValue={field2}
              name="attendance"
              field="Attendance"
              field1="Yes"
              field2="No"
              field3="Online"
              required={true}
              color="success"
              style={{ width: "19.6%" }}
            />
          </Box>

          <MuiButton
            label={rowId ? "Confirm Edit" : "Submit"}
            type="submit"
            startIcon={null}
            click={click ? click : handleLoading}
            style={{ marginLeft: "8px", marginBottom: "1rem" }}
            color="success"
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