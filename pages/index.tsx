'use client'

import React from 'react'
import Products from '@/components/Products'
import Header from '@/components/Header'
import Head from 'next/head'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://avo-store-cpezbw4hb-alejou343.vercel.app/api/avo')
    const { data: avocados }: TAPIAvoResponse = await response.json()

    return {
        props: {
            avocados
        }
    }
}


const index = ({avocados}: {avocados: TProduct[]}) => {

    return (
        <>
            <Head>
                <title>Avo Store</title>
            </Head>
            <Header />
            <Products avocados={avocados} />
        </>
    )
}

export default index