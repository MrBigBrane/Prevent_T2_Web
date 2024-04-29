'use server';

import weightCreator from '../serverfunctions/weightPerWeek';
import MuiGraph from '@/components/graph/MuiGraph';
// import TestComponent from '@/components/TestComponent'

export default async function GraphPage() {
    let weightData = Array.from(await weightCreator())

    return <MuiGraph yData={weightData[0]} xData={weightData[1]} />
}