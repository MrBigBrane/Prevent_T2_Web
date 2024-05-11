'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import resetPassword from '@/lib/reset/resetPassword'
import MuiInput from '../../inputs/MuiInput'

export default function EmailReset() {
    const [state, formAction] = useFormState(resetPassword, { message: null }) 

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <form action={formAction} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
            <label className="text-md" htmlFor="text">
                Enter New Password
             </label>
             <MuiInput required className="rounded-md px-4 py-2 bg-inherit border mb-6" name="password" />
            <MuiButton startIcon={null} label="Save Changes" type="submit" color="success" />
        </form>
        </div>
    )
        
}