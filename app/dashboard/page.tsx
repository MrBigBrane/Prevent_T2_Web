'use server';

import AddButton from '@/components/buttons/AddButton';
import LinkButton from '@/components/buttons/LinkButton';
import MinutesGraph from '@/components/graph/MinutesGraph';
import WeightGraph from '@/components/graph/WeightGraph';

export default async function Index() {

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
          <AddButton page="dashboard/activitylog" />
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
        <AddButton page="dashboard/lifestylelog" />
        <LinkButton href="dashboard/coach"
        type={null}
        label="View Lifestyle Log"
        startIcon={null}
        />
      </div>
      
    </div>
  );
}
