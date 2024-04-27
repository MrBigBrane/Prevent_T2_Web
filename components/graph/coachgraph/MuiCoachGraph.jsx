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
          label: "Exercise Minutes",
            curve: "linear",
          data: yData,
        },
        {
          label: "Weight",
          curve: "linear",
          data: yData2,
        }
        
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}