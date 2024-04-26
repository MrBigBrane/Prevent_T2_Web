'use server';

import MuiModal from '@/components/forms/MuiModal'
import LinkButton from '@/components/buttons/LinkButton';
import MinutesGraph from '@/components/graph/MinutesGraph';
import WeightGraph from '@/components/graph/WeightGraph';
import minutesPerWeek from '@/components/serverfunctions/minutesPerWeek'

export default async function Index() {
  let minutesData = Array.from(await minutesPerWeek())
  const weeksMinutes = minutesData[0][minutesData[0].length - 1]

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <h1>Weight Progress</h1>
      <WeightGraph />
      <h1>Exercise Minutes</h1>
      <MinutesGraph />
      <div>
          <h1 style={{
            float: 'left'
          }}>
            Activity Logs</h1>
          <MuiModal edit={false} title='Activity Logger' rowId={false} field1='' field2='' field3='' />
          <LinkButton href="dashboard/activities" 
            type={null}
            label="View Activities"
            startIcon={null}
          />
      </div>
      <div>
        <h1 style={{
          float: "left"
        }}>Lifestyle Logs</h1>
        <MuiModal edit={false} title={null} rowId={false} field1={weeksMinutes} field2='' field3='' />
        <LinkButton href="dashboard/coachlog"
        type={null}
        label="View Lifestyle Log"
        startIcon={null}
        />
      </div>
      
    </div>
  );
}
