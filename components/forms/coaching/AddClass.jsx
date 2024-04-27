'use client';

import MuiButton from "@/components/buttons/MuiButton";
import codeGen from '@/components/serverfunctions/coach/codeGen.js'
import MuiTextField from '@/components/inputs/MuiTextField'
import { useFormState } from "react-dom";

export default function AddClassCoach({ click }) {
    const [state, formAction] = useFormState(codeGen, { message: null })

    return (
        <form action={formAction}>
            <h1>Create a Class</h1>
            <MuiTextField id="classname" label="Class Name" variant="filled" name="classname" defaultValue='' type="" />
            <br />
            <MuiButton click={click} type='submit' startIcon={null} label='Create Class' />
        </form>
        
    )
}