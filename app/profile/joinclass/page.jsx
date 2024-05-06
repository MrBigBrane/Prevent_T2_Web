'use client';

import MuiButton from '@/components/buttons/MuiButton'
import MuiTextField from '@/components/inputs/MuiTextField'
import joinClassTableAction from '@/lib/joinClassTableAction'
import { useFormState } from 'react-dom'
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import LinkButton from '@/components/buttons/LinkButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * The JoinClassPage function is a client-side rendered page that handles the rendering of the Join Class page.
 * It fetches the current user from the server and checks if they are logged in. If the user is not logged in,
 * it redirects them to the login page. If the user is logged in, it renders the Join Class page with the
 * appropriate components and messages.
 *
 * @param {Object} searchParams - The search parameters from the url
 * @returns {JSX.Element} - The rendered Join Class page
 */
export default function JoinClassPage({ searchParams }) {
    /**
     * A function that fetches the current user from the server and returns their data.
     * If the user is not logged in, it redirects them to the login page.
     *
     * @returns {Promise<Object>} - The data of the current user
     */

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
