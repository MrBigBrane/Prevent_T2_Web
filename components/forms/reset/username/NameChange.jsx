'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../../buttons/MuiButton'
import renameFirstName from '@/lib/reset/usernamechange/renameFirstName'
import MuiTextField from '../../../inputs/MuiTextField'

export default function NameChange({ click, firstName, lastName }) {
    const [state, formAction] = useFormState(renameFirstName, { message: null }) 

    return (
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form
          action={formAction}
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        >
          <MuiTextField
            id={"first_name"}
            required
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="first_name"
            label={"First Name"}
            variant={"outlined"}
            type={"text"}
            defaultValue={firstName}
            disabled={false}
          />
          <MuiTextField
            id={"last_name"}
            required
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="last_name"
            label={"Last Name"}
            variant={"outlined"}
            type={"text"}
            defaultValue={lastName}
            disabled={false}
          />
          <MuiButton
            startIcon={null}
            label="Save Changes"
            type="submit"
            color="success"
            onClick={click}
          />
        </form>
      </div>
    );
        
}