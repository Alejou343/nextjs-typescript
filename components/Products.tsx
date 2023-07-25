import React from 'react'
import AvoCard from '@/components/AvoCard';

const Products = () => {

    const API: string = "/api/avo"
    const [avocados, setAvocados] = React.useState<TProduct[]>([]);

    const fetchData = (url: string) => {
        window.fetch(url)
        .then(response => response.json())
        .then(data => setAvocados(data.data))
    } 

    React.useEffect(() => {
        fetchData(API)
    }, [])
    
    return (
        <div className="Products grid grid-cols-2 gap-6 items-center place-items-center w-2/4 mx-auto">
            {avocados.map(avo => <AvoCard key={avo.id} name={avo.name} image={avo.image} price={avo.price} id={avo.id} />)}
        </div>
    )
}

export default Products