'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import resetEmail from '@/lib/reset/resetEmail'

export default function EmailReset() {
    const [state, formAction] = useFormState(resetEmail, { message: null }) 

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <form action={formAction} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
                <label className="text-md" htmlFor="email">
                    Enter New Email
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
                />
                <MuiButton startIcon={null} label="Save Changes" type="submit" color="success" />
            </form>
        </div>
        
    )
}