'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/users/editCoachTableAction.jsx';
import tableAction from '@/lib/users/lifestyleTableAction';
import MuiButton from '@/components/buttons/MuiButton';
import MuiDateTime from '@/components/inputs/MuiDateTime';
import { useState } from 'react';
import { Box, LinearProgress } from '@mui/material';

export default function LifestyleCoachLogPage({ field1, field2, field3, minutes1, minutes2, rowId, click }) {
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
          {rowId ? null : <MuiDateTime name="date" />}
          {minutes1 || minutes1 === 0 ? (
            <Box sx={{ paddingLeft: 1, marginTop: 2 }}>
              <MuiSelect
                name="minutesshown"
                id="minutesShown"
                field={"Week's Exercise Minutes"}
                field1={`This week's exercise time (min): ${minutes1}`}
                field2={`Last week's exercise time (min): ${minutes2}`}
                required
                color="success"
              />
            </Box>
          ) : null}
          <Box sx={{ marginTop: 1 }}>
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
          </Box>
          
          <Box sx={{ paddingLeft: 1, marginTop: 1 }}>
            <MuiSelect
              defaultValue={field2}
              name="attendance"
              field="Attendance"
              field1="1 In-person"
              field2="2 Online"
              field3="3 Distance Learning"
              required={true}
              color="success"
              // style={{
              //   width: "19.6%"
              // }}
            />
          </Box>

          <Box sx={{ paddingLeft: 1, marginTop: 2 }}>
            <MuiSelect
              defaultValue={field3}
              name="sesstype"
              field="Session Type"
              field1="C Core Session"
              field2="CM Core Maintenance Session"
              field3="OM Ongoing Maintenance Session"
              field4="MU-C Make up session in core phase"
              field5="MU-OM Make up session in ongoing phase"
              field6="MU-CM Make up session in core maintenance phase"
              required={true}
              color="success"
            />
          </Box>

          <MuiButton
            label={rowId ? "Confirm Edit" : "Submit"}
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