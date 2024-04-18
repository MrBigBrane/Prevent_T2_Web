'use client';

import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo({ weightData, dateData }) {
  return (
    <LineChart
      xAxis={[{ 
        scaleType: 'band',
        data: dateData }]}
      series={[
        {
            curve: "linear",
          data: weightData,
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}