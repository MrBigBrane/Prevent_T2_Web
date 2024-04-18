'use server';

import WeightGraph from '@/components/graph/WeightGraph'

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        {/*START_DEV_ONLY */}
          <h1>Weight Progress</h1>
          <WeightGraph />
        {/*END_DEV_ONLY */}
    </div>
  );
}
