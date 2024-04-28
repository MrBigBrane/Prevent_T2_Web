

'use client';

import MuiSelect from '@/components/inputs/MuiSelect.jsx';
import MuiTextField from '@/components/inputs/MuiTextField.jsx'
import { useFormState } from 'react-dom';
import editTableAction from '@/lib/editActivitiesTableAction.jsx';
import tableAction from '@/lib/activitiesTableAction.jsx';
import MuiButton from '@/components/buttons/MuiButton';

export default function ActivityLogPage() {
    const [state, formAction] = useFormState(tableAction, { message: null })

    return (
        <>
            <form action={formAction}>
                {/* Standard stats */}
                <MuiTextField defaultValue={null} name="age" id="age" label="Age" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="weight" id="weight" label="Weight" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="activity" id="activity" label="Height" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Gender" variant="filled" type='number'/>

                {/* Health questions */}
                {/* If woman */}
                <MuiTextField defaultValue={null} name="activity" id="activity" label="Have you had gestational diabetes?" variant="filled" type='number'/>
                {/*  */}
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Have You Taken the CDC Risk Assessment Test?" variant="filled" type='number'/>
                {/* If taken */}
                <MuiTextField defaultValue={null} name="activity" id="activity" label="What was your score?" variant="filled" type='number'/>
                {/*  */}
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Do you have a family history of diabetes" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="activity" id="activity" label="Do you have high blood pressure?" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Do you consider yourself active?" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="activity" id="activity" label="What is your A1C Level?" variant="filled" type='number'/>

                {/* Program specific */}
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Will you be able to attend zoom classes or watch videos?" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="activity" id="activity" label="Are you committed to improving?" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Do you allow NRIVA to share your weight confidentially with the CDC?" variant="filled" type='number'/>
                
                {/* Contact info */}
                <MuiTextField defaultValue={null} name="activity" id="activity" label="City" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="State" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="activity" id="activity" label="Phone Number" variant="filled" type='number'/>
                <MuiTextField defaultValue={null} name="minutes" id="minutes" label="Can we contact you via WhatsApp?" variant="filled" type='number'/>
                <MuiButton label="Submit" type="submit" startIcon={null} click={null}/>
            </form>
        </>
        // Age, Weight, A1C, CDC Risk Assessment?, Gender, IF woman gestational diabetes?, relative with diabetes, 
//                 high bp, active?, zoom class, committed to improve, 
//                 phone num, 26 zoom classes or 45 min vid, city and state, NRIVA sharing weight, 
//                 join whatsapp, height, score on cdc risk assessment
    )
}