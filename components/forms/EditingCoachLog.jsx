'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/editCoachTableAction.jsx';
import tableAction from '@/lib/lifestyleTableAction';
import MuiButton from '@/components/buttons/MuiButton';

export default function LifestyleCoachLogPage({ field1, field2, field3, rowId }) {
    const [state, formAction] = useFormState(rowId ?  editTableAction : tableAction, { message: null })

    return (
        <>
            <form action={formAction}>
                <MuiTextField defaultValue={field1} name="minutes" id="minutes" label="Exercise Minutes" variant="filled" type='' />
                <MuiTextField defaultValue={field2} name="weight" id="weight" label="Current Weight" variant="filled" type='' />
                <MuiSelect defaultValue={field3} name="attendance" field="Attendance" field1="Yes" field2="No" field3="Online" />
                <MuiButton label={rowId ? "Confirm Edit" : "Submit"} type="submit" startIcon={null} />
                <MuiTextField defaultValue={rowId} name="rowId" id="rowId" label='id' variant='filled' type='hidden'  />
            </form>
        </>
    )
}