import React from 'react'
import Cart from '@/components/Cart'
import Head from 'next/head'

const cart = () => {
  return (
    <>
      <Head>
        <title>Avo Cart</title>
      </Head>
      <Cart />
    </>
  )
}

export default cart