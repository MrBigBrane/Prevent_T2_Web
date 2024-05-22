'use server';

import CsvButton from '@/components/buttons/download/CsvButton'

export default async function TestPage({ searchParams }) {

    return (
        <>
            <p>Testing Page</p>
            <CsvButton searchValue={'79OK9I'} />
        </>
    )
}
