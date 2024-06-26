'use server';

import minutesPerWeek from '../serverfunctions/minutesPerWeek'
import MuiGraph from './MuiGraph'

export default async function MinutesGraph() {
    let minutesData = Array.from(await minutesPerWeek())

    return <MuiGraph yData={minutesData[1]} xData={minutesData[0]} />
}