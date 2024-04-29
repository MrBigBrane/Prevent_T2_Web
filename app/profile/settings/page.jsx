'use server';

import EmailReset from '@/components/forms/reset/EmailReset'
import PasswordReset from '@/components/forms/reset/PasswordReset'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

export default async function Settings({ searchParams }) {
    let userData = Object.assign({}, await getCurrentUser());
    return (
        <>
            <h1>Settings</h1>
            <p> Current Email Address: {userData.email}</p>
            <EmailReset />
            {searchParams?.emailreset &&  <MuiSuccess severity="success">Email Reset Successful!</MuiSuccess>}
            {searchParams?.emailnotreset &&  <MuiSuccess severity="error">Email Reset Failed.</MuiSuccess>}
            <PasswordReset />
            {searchParams?.passwordreset &&  <MuiSuccess severity="success">Password Reset Successful!</MuiSuccess>}
            {searchParams?.passwordnotreset &&  <MuiSuccess severity="error">Password Reset Failed.</MuiSuccess>}
        </>
    )
}