import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <title>Avocado Store</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <body className='bodyLight'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}