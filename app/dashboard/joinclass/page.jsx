'use client';

import MuiButton from '@/components/buttons/MuiButton'
import MuiTextField from '@/components/inputs/MuiTextField'
import joinClassTableAction from '@/lib/joinClassTableAction'
import { useFormState } from 'react-dom'

export default function JoinClassPage() {
    const [state, formAction] = useFormState(joinClassTableAction, { message: null })

    return (
        <>
            <h1>Join a class</h1>
            <form action={formAction}>
                <MuiTextField id="class" name="classcode" label="Class Code" variant="filled" type='' disabled={null} defaultValue='' />
                <MuiButton startIcon={null} label='Enter Code' type='submit' />
            </form>
            
        </>
        

    )
}