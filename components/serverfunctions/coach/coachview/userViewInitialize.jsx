'use client';


import { useRouter } from "next/navigation";


export default async function userViewInitialize(id) {

    const router = useRouter();
    // use id for param

    router.push(`/dashboard/coaches/${id}`)

    // redirect(`/dashboard/coaches/${id}`)
}