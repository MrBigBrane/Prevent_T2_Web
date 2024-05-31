
import LinkButton from '@/components/buttons/LinkButton'
import Onboard from '@/components/forms/onboarding/Onboard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function OnboardingPage() {
    return (
      <>
        <LinkButton
          href="/profile"
          label="Back"
          type={null}
          startIcon={<ArrowBackIcon />}
          style={{ position: "absolute", top: "5rem", left: "1rem" }}
        />
        <Onboard />
      </>
    );
}