import ActivityTable from "../../../components/tables/ActivityTable";
import MuiModal from '../../../components/forms/MuiModal'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";

export default function ActivityTablePage({ searchParams }) {

    return (
      <>
        {searchParams?.activity &&  <MuiSuccess severity="success">Activity Added!</MuiSuccess>}
        <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />
        <h1>Activity Logs</h1>
        <MuiModal edit={false} title="Activity Logger" rowId={false} field1='' field2='' field3='' />
        <ActivityTable table="activity_log" />
      </>
      
    )
}
