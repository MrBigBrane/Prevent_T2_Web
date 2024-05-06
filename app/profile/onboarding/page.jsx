
import LinkButton from '@/components/buttons/LinkButton'
import Onboard from '@/components/forms/onboarding/Onboard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function OnboardingPage() {
    return (
        <>
            <LinkButton href="/profile" label="Back" type={null} startIcon={<ArrowBackIcon />} />
            <Onboard />
        </>
    )
}