'use server';

import fetcher from '@/components/fetcher';
import fetcherCopy from '@/components/fetcherCopy';
import MuiGraph from '@/components/MuiGraph.jsx';
import Graphtest from '@/components/Graphtester'
// import TestComponent from '@/components/TestComponent'

export default async function GraphPage() {
    console.log('Test 1')
    let weightData = []
    let dateData = []

    let weightCopy = Object.assign({}, await fetcher());
    console.log('Test 2')
    Object.entries(weightCopy).map((row) => {
        const weight = row[1].current_weight;
        weightData.push(weight);
        console.log(weight);
    })
    console.log('Test 3')
    let dateCopy = Object.assign({}, await fetcherCopy());
    Object.entries(dateCopy).map((row) => {
        const weight = row[1].created_at;
        dateData.push(weight);
        console.log(weight);
    });
    console.log('Test 4');
    return <MuiGraph weightData={weightData} dateData={dateData} />
}