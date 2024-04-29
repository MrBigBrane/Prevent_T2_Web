'use server';

import MuiModal from '@/components/forms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import CoachTable from '@/components/tables/CoachTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek'

export default async function CoachPage() {
  let minutesData = Array.from(await minutesPerWeek())
  const weeksMinutes = minutesData[0][minutesData[0].length - 1]

    return (
      <>
        <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />
        <h1>Coaching Log</h1>
        <MuiModal edit={false} title={null} rowId={false} field3={weeksMinutes} field2='' field1='' />
        <CoachTable table="lifestyle_coach_log" />
      </>
        
    )
}