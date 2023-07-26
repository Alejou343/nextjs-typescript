import React from 'react'
import AvoCard from '@/components/AvoCard';
import AppContext from '@/context/AppContext';

const Products = () => {

    const context = React.useContext(AppContext)
    const { avocados } = context

    return (
        <div className="Products grid grid-cols-2 gap-6 items-center place-items-center w-2/4 mx-auto">
            {avocados.map((avo: TProduct) => 
                <AvoCard 
                    key={avo.id} 
                    name={avo.name} 
                    image={avo.image} 
                    price={avo.price} 
                    id={avo.id} 
            />)}
        </div>
    )
}

export default Products