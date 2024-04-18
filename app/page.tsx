'use server';

import Graphtest from '@/components/Graphtester'
import MuiGraph from '@/components/MuiGraph'

export default async function Index() {
  

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      
          <h1>Dummy Text</h1>
          <MuiGraph weightData={null} dateData={null} />

    </div>
  );
}
