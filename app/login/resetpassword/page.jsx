'use server';

import EmailReset from '@/components/forms/reset/EmailReset'
import PasswordReset from '@/components/forms/reset/PasswordReset'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import LinkButton from '@/components/buttons/LinkButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default async function Settings({ searchParams }) {
    let userData = Object.assign({}, await getCurrentUser());
    return (
        <>
            <PasswordReset />
            {searchParams?.passwordreset &&  <MuiSuccess severity="success">Password Reset Successful!</MuiSuccess>}
            {searchParams?.passwordnotreset &&  <MuiSuccess severity="error">Password Reset Failed.</MuiSuccess>}
        </>
    )
}