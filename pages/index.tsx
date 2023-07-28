'use client'

import React from 'react'
import Products from '@/components/Products'
import Header from '@/components/Header'
import Head from 'next/head'

const index = () => {

    return (
        <>
            <Head>
                <title>Avo Store</title>
            </Head>
            <Header />
            <Products />
        </>
    )
}

export default index