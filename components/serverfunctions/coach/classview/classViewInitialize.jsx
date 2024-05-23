'use server';

import { redirect } from "next/navigation";


// import { useRouter } from "next/navigation";


export default async function classViewInitialize(id) {

    // const router = useRouter();
    // use id for param

    // router.push(`/dashboard/coaches/view/${id}`)

    redirect(`/dashboard/coaches/view/${id}`)
}