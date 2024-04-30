'use client';

import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo({ yData, xData }) {
  return (
    <LineChart
      xAxis={[{ 
        scaleType: 'band',
        data: xData }]}
      series={[
        {
            curve: "linear",
          data: yData,
          valueFormatter: (value) => (value == null ? 'Not Entered' : value.toString()),
          connectNulls: true,
        },
        
      ]}
      height={300}
      margin={{ left: 50, right: 50, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}