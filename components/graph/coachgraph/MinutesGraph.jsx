'use server';

import minutesPerWeek from '../../serverfunctions/coach/coachview/minutesPerWeek'
import MuiGraph from '../MuiGraph'

export default async function MinutesGraph({ userId }) {
    let minutesData = Array.from(await minutesPerWeek(userId))
    return <MuiGraph yData={minutesData[0]} xData={minutesData[1]} />
}