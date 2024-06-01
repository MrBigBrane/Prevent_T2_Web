'use client';

import joinClassTableAction from '@/lib/joinClassTableAction'
import { useFormState } from 'react-dom'
import MuiButton from '@/components/buttons/MuiButton'
import MuiTextField from '@/components/inputs/MuiTextField'

export default function JoinClass() {
    const [state, formAction] = useFormState(joinClassTableAction, { message: null });


    return (
      <form action={formAction}>
        <MuiTextField
          id="class"
          name="classcode"
          label="Class Code"
          variant="outlined"
          type=""
          disabled={null}
          defaultValue=""
          color="success"
        />
        <MuiButton
          startIcon={null}
          label="Enter Code"
          type="submit"
          color="success"
          style={{ marginLeft: "8px" }}
        />
      </form>
    );
}