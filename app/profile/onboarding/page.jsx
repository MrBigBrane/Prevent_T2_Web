'use server';

import { createClient } from '@/utils/supabase/server';
import LinkButton from '@/components/buttons/LinkButton'
import Onboard from '@/components/forms/onboarding/Onboard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { redirect } from 'next/navigation';

export default async function OnboardingPage() {
  const supabase = createClient();

  const {
      data: { user },
    } = await supabase.auth.getUser();

    if(!user?.id){
      redirect('/login?message=Unauthorized access! Please login first.')
  }

    return (
      <>
        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", top: "7.5rem", left: "1rem" }}
        />
        <Onboard />
      </>
    );
}