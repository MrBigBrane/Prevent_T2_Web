'use client';

import MuiButton from '@/components/buttons/MuiButton'
import MuiTextField from '@/components/inputs/MuiTextField'
import joinClassTableAction from '@/lib/joinClassTableAction'
import { useFormState } from 'react-dom'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import LinkButton from '@/components/buttons/LinkButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function JoinClassPage({ searchParams }) {

    // Use the useFormState hook to manage the form state and the form action
    const [state, formAction] = useFormState(joinClassTableAction, { message: null });

    return (
        <>
            {/* Render error messages for join and unauthorized actions */}
            {searchParams?.notjoined && <MuiSuccess severity="error">Error! Join Failed.</MuiSuccess>}
            {searchParams?.unauthorized && <MuiSuccess severity="warning">Unauthorized Access! Please join a class first.</MuiSuccess>}
            {searchParams?.left && <MuiSuccess severity="success">Class left!</MuiSuccess>}

            <LinkButton href="/profile" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            {/* Render the Join Class page header */}
            <h1>Join a class</h1>

            {/* Render the Join Class form */}
            <form action={formAction}>
                <MuiTextField
                    id="class"
                    name="classcode"
                    label="Class Code"
                    variant="filled"
                    type=''
                    disabled={null}
                    defaultValue=''
                />
                <MuiButton startIcon={null} label='Enter Code' type='submit' />
            </form>

        </>
    )
}
