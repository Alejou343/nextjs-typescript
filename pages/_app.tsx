import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import AppContext from '@/context/AppContext'
import useInitialState from '@/hooks/useInitialState'
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {

    const initialState = useInitialState()

    return (
        <AppContext.Provider value={initialState}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContext.Provider>
    )
}