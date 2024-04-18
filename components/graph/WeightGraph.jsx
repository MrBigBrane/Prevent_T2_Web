'use server';

import fetcher from '@/components/fetcher';
import MuiGraph from '@/components/graph/MuiGraph'
// import TestComponent from '@/components/TestComponent'

export default async function GraphPage() {
    // console.log('Test 1')
    let weightData = []
    let dateData = []

    let weightCopy = Object.assign({}, await fetcher('lifestyle_coach_log', 'current_weight'));
    // console.log('Test 2')
    Object.entries(weightCopy).map((row) => {
        const weight = row[1].current_weight;
        weightData.push(weight);
        // console.log(weight);
    })
    // console.log(dateData)
    let dateCopy = Object.assign({}, await fetcher('lifestyle_coach_log', 'created_at'));
    Object.entries(dateCopy).map((row) => {
        const weight = row[1].created_at;
        dateData.push(weight);
        // console.log(weight);
    });
    // console.log(weightData);
    return <MuiGraph weightData={weightData} dateData={dateData} />
}