'use client';

import { LineChart } from '@mui/x-charts/LineChart';

export default async function GridDemo({ weightData, dateData }) {
  return (
    <LineChart
      xAxis={[{ data: [0, 1, 2, 3, 4] }]}
      series={[
        {
            curve: "linear",
          data: [0, 1, 2, 3, 4],
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}