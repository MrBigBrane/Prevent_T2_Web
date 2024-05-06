'use client';

import LinkButton from '@/components/buttons/LinkButton';

export default function ProfilePage() {
    return (
    <>
        <h1>Profile Page</h1>
        <LinkButton href="/profile/onboarding?section1=true" startIcon={null} label="Onboarding Form" type='' />
        <LinkButton href="/profile/mealplan" startIcon={null} label="Meal Plan" type='' />
    </>
    )
}