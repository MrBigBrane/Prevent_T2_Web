'use server';

import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

import AddClassCoach from "../../../components/forms/coaching/AddClass";
import getCurrentUser from '@/components/serverfunctions/getCurrentUser';
import { redirect } from 'next/navigation';

export default async function BecomeCoach({ searchParams }) {
    const user = Object.assign({},await getCurrentUser())

    if(!user.id){
      redirect('/login?message=Please login before trying to become a coach.')
    }

    return (
    <>
        {searchParams?.unauthorized &&  <MuiSuccess severity="warning">Please Create a Class Before Accessing The Coaches Dashboard.</MuiSuccess>}
        <AddClassCoach />
    </>
    )
}