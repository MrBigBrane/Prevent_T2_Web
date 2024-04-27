'use server';

import { redirect } from "next/navigation";


export default async function classViewInitialize(id) {
    // use id for param

    redirect(`/dashboard/coaches/view/${id}`)
}