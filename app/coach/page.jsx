import CoachTable from '@/components/activitytable/ActivityTableUpdated'

export default function CoachPage() {
    return (
        <CoachTable
        table="lifestyle_coach_log"
        field1="attendance"
        title1="Attendance"
        field2="current_weight"
        title2="Weight"
        field3="minutes"
        title3="Exercise Minutes"
      />
    )
}