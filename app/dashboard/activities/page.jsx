import ActivityTable from "../../../components/tables/ActivityTable";
import AddButton from '../../../components/buttons/AddButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LinkButton from "@/components/buttons/LinkButton";

export default function ActivityTablePage() {
    return (
      <>
        <LinkButton href="/dashboard" label="Back" type={null} startIcon={<ArrowBackIcon />} />
        <h1>Activity Logs</h1>
        <AddButton page="activitylog" />
        <ActivityTable table="activity_log" />
      </>
      
    )
}
