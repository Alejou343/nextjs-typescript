import React from 'react'
import { useRouter } from 'next/router'
import AvoDetails from '@/components/AvoDetails'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticPaths = async () => {

    const response = await fetch('https://avo-store-cpezbw4hb-alejou343.vercel.app/api/avo')
    const { data: allAvos }: TAPIAvoResponse = await response.json()
    const paths = allAvos.map(avo => ({params: {id: avo.id}}))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://avo-store-cpezbw4hb-alejou343.vercel.app/api/avo')
    const { data: avocados }: {data: TProduct} = await response.json()

    return {
        props: {
            avocados
        }
    }
}

const AvocadoInfo = ({avocados}: {avocados: TProduct[]}) => {

    const route = useRouter()
    // const { avocados } = React.useContext(AppContext)
    const filteredAvo: TProduct[] = avocados.filter(avo => avo.id === route.query.id)

    return (
        <>
        <Head>
            <title>{filteredAvo[0]?.name}</title>
        </Head>
        { !!filteredAvo[0] ? <AvoDetails product = {filteredAvo[0]} /> 
            : <div className="text-center text-red-500 my-6">Producto no encontrado</div>
        }
        </>
    ) 
}

export default AvocadoInfo