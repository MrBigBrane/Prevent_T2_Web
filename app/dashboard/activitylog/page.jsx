'use client';

import MuiSelect from '@/components/lifestylelog/MuiSelect.jsx';
import MuiTextField from '@/components/lifestylelog/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import tableAction from '@/lib/activitiesTableAction.jsx';
import { Button } from '@mui/material';
import MuiButton from '@/components/buttons/MuiButton';

export default function ActivityLogPage() {
    const [state, formAction] = useFormState(tableAction, { message: null })

    return (
        <>
            
            <form action={formAction}>
                <MuiTextField name="activity" id="activity" label="Activity Name" variant="filled" />
                <MuiTextField name="minutes" id="minutes" label="Activity Minutes" variant="filled" />
                <MuiSelect defaultValue='' name="difficulty" field="Perceived Difficulty" field1="Easy" field2="Medium" field3="Difficult" />
                <MuiButton label="Add Activity" type="submit" startIcon={null}/>
            </form>
        </>
    )
}