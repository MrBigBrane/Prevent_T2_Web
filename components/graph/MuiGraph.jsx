'use client';

import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo({ yData, xData, yData2 }) {
  return (
    <LineChart
      xAxis={[{ 
        scaleType: 'band',
        data: xData }]}
      series={[
        {
            curve: "linear",
          data: yData,
        },
        
      ]}
      height={300}
      margin={{ left: 50, right: 50, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}