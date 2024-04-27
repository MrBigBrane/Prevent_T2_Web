'use server';

import minutesPerWeek from '../../serverfunctions/coach/coachview/minutesPerWeek'
import weightCreator from '../../serverfunctions/coach/coachview/weightPerWeek'
import MuiGraph from './MuiCoachGraph'

export default async function MinutesGraph({ userId }) {
    let minutesData = Array.from(await minutesPerWeek(userId))
    let weightData = Array.from(await weightCreator(userId))

    return <MuiGraph yData={minutesData[0]} xData={minutesData[1]} yData2={weightData[0]} />
}