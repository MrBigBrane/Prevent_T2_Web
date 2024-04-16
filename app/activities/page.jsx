import MuiTable from "../../components/activitytable/ActivityTableUpdated";

export default function ActivityTablePage() {
    return (
        <MuiTable
        table="activity_log"
        field1="activity"
        title1="Activity Name"
        field2="minutes"
        title2="Minutes"
        field3="difficulty"
        title3="Perceived Difficulty"
      />
    )
}
