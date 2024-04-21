import MuiModal from '@/components/forms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import CoachTable from '@/components/tables/CoachTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CoachPage() {
    return (
      <>
        <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />
        <h1>Coaching Log</h1>
        <MuiModal edit={false} title={null} rowId={false} field1='' field2='' field3='' />
        <CoachTable table="lifestyle_coach_log" />
      </>
        
    )
}