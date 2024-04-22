'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/editActivitiesTableAction.jsx';
import tableAction from '@/lib/activitiesTableAction.jsx';
import MuiButton from '@/components/buttons/MuiButton';

export default function ActivityLogPage({ field1, field2, field3, rowId }) {
    const [state, formAction] = useFormState(rowId ?  editTableAction : tableAction, { message: null })

    return (
        <>
            <form action={formAction}>
                <MuiTextField defaultValue={field1} name="activity" id="activity" label="Activity Name" variant="filled" type=''/>
                <MuiTextField defaultValue={field2} name="minutes" id="minutes" label="Activity Minutes" variant="filled" type=''/>
                <MuiSelect defaultValue={field3} name="difficulty" field="Perceived Difficulty" field1="Easy" field2="Medium" field3="Difficult" />
                <MuiButton label={rowId ? "Confirm Edit" : "Add Activity"} type="submit" startIcon={null}/>
                {rowId ? <MuiTextField defaultValue={rowId} name="rowId" id="rowId" label='id' variant='filled' type='hidden'  /> : null}
            </form>
        </>
    )
}