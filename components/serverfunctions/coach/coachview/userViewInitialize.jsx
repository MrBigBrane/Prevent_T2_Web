'use server';

import { redirect } from "next/navigation";


export default async function userViewInitialize(id) {
    // use id for param

    redirect(`/dashboard/coaches/${id}`)
}