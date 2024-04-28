'use server';

import EmailReset from '@/components/forms/reset/EmailReset'
import PasswordReset from '@/components/forms/reset/PasswordReset'
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';

export default async function Settings() {
    let userData = Object.assign({}, await getCurrentUser());

    return (
        <>
            <h1>Settings</h1>
            <p> Current Email Address: {userData.email}</p>
            <EmailReset />
            <PasswordReset />
        </>
    )
}