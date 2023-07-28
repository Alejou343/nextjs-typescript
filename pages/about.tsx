import React from 'react'
import AboutContent from '@/components/AboutContent';
import Head from 'next/head';

const about = () => {
    return (
        <>
            <Head>
                <title>About avos</title>
            </Head>
            <AboutContent />
        </>
    )
}

export default about