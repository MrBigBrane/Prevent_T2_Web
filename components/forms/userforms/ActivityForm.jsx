'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/users/editActivitiesTableAction.jsx';
import tableAction from '@/lib/users/activitiesTableAction.jsx';
import MuiButton from '@/components/buttons/MuiButton';
import { Box, LinearProgress } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function ActivityLogPage({ field1, field2, field3, field4, rowId, click }) {
    const [loading, setLoading] = useState(false)
    const [state, formAction] = useFormState(rowId ? editTableAction : tableAction, { message: null })

    const exerciseTypes = [
      { icon: "run", title: "Run" },
      { icon: "walk", title: "Walk" },
      { icon: "swim", title: "Swim" },
      { icon: "weight", title: "Weight Training" },
      { icon: "yoga", title: "Pilates" },
      { icon: "bike", title: "Bike" },
      { icon: "jump-rope", title: "Crossfit" },
      { icon: "human", title: "Calisthenics" },
      { icon: "adjust", title: "Other" },
    ]

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
          <MuiTextField
            defaultValue={field1}
            name="activity"
            id="activity"
            label="Activity Name"
            variant="outlined"
            type="text"
            required={true}
            color="success"
          />
          <Box marginLeft={"8px"} paddingBottom={2} paddingTop={1}>
            <MuiSelect
              defaultValue={field4}
              name="exercisetype"
              field="Exercise Type"
              field1={exerciseTypes[0].title}
              field2={exerciseTypes[1].title}
              field3={exerciseTypes[2].title}
              field4={exerciseTypes[3].title}
              field5={exerciseTypes[4].title}
              field6={exerciseTypes[5].title}
              field7={exerciseTypes[6].title}
              field8={exerciseTypes[7].title}
              field9={exerciseTypes[8].title}
              required={true}
              style={{ width: "19.6%" }}
              color="success"
            />
          </Box>
          <MuiTextField
            defaultValue={field2}
            name="minutes"
            id="minutes"
            label="Activity Minutes"
            variant="outlined"
            type="number"
            required={true}
            color="success"
          />
          <Box marginLeft={"8px"} paddingBottom={2} paddingTop={1}>
            <MuiSelect
              defaultValue={field3}
              name="difficulty"
              field="Perceived Difficulty"
              field1="Easy"
              field2="Medium"
              field3="Difficult"
              required={true}
              style={{ width: "19.6%" }}
              color="success"
            />
          </Box>

          <MuiButton
            label={rowId ? "Confirm Edit" : "Add Activity"}
            type="submit"
            startIcon={<AddIcon />}
            click={click ? click : handleLoading}
            style={{ marginLeft: "8px", marginBottom: "1rem" }}
            color="success"
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