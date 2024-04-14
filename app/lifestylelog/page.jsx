'use client';

import MuiSelect from '@/components/lifestylelog/MuiSelect.jsx';
import MuiTextField from '@/components/lifestylelog/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import tableAction from '@/lib/lifestyleTableAction.jsx';
import { Button } from '@mui/material';

export default function LifestyleCoachLogPage() {
    const [state, formAction] = useFormState(tableAction, { message: null })

    return (
        <>
            <form action={formAction}>
                <MuiTextField name="minutes" id="minutes" label="Exercise Minutes" variant="filled" />
                <MuiTextField name="weight" id="weight" label="Current Weight" variant="filled" />
                <MuiSelect name="attendance" field1="Yes" field2="No" field3="Online" />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            
        </>
    )
}