'use client';

import forgotPasswordAction from '@/lib/reset/forgotPassword';
import MuiButton from '@/components/buttons/MuiButton';
import { useFormState } from 'react-dom';
import MuiTextField from '@/components/inputs/MuiTextField';

export default function PasswordForm() {
    const [state, formAction] = useFormState(forgotPasswordAction, { message: null })

    return (
        <form action={formAction}>
            <MuiTextField id="email" name="email" label="Account Email" variant="filled" type="text" required />
            <MuiButton label="Submit" type="submit" startIcon={null} />
        </form>
    );
}