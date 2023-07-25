import React from 'react'
import { useRouter } from 'next/router'
import AvoDetails from '@/components/AvoDetails'


const AvocadoInfo = () => {
    
    const API: string = '/api/avo/'
    const route = useRouter()
    const [avocados, setAvocados] = React.useState<TProduct[]>([]);

    const fetchData = (url: string) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setAvocados(data.data))
    } 
    
    React.useEffect(() => {
        fetchData(API)
    }, [])                  // --> Esto debería venir de un estado global

    const filteredAvo = avocados.filter(avo => avo.id === route.query.id)

    return (
        <>
        { !!filteredAvo[0] ? <AvoDetails 
            name={filteredAvo[0]?.name} 
            image={filteredAvo[0]?.image}
            id={filteredAvo[0]?.id}
            sku={filteredAvo[0]?.sku}
            price={filteredAvo[0]?.price}
            attributes={filteredAvo[0]?.attributes} 
            /> 
            : <div className="text-center text-red-500 my-6">Producto no encontrado</div>
        }
        </>
    ) 
}

export default AvocadoInfo