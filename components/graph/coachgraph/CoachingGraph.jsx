'use server';

import weightCreator from '../../serverfunctions/coach/coachview/weightPerWeek'
import MuiGraph from '../MuiGraph'

export default async function MinutesGraph({ userId }) {
    
    let weightData = Array.from(await weightCreator(userId))

    return <MuiGraph xData={weightData[1]} yData={weightData[0]} />
}