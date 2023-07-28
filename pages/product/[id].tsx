import React from 'react'
import { useRouter } from 'next/router'
import AvoDetails from '@/components/AvoDetails'
import AppContext from '@/context/AppContext'
import Head from 'next/head'


const AvocadoInfo = () => {

    const route = useRouter()
    const { avocados } = React.useContext(AppContext)
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