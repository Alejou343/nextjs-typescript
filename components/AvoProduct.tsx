import AppContext from '@/context/AppContext'
import React from 'react'

interface TypeProps {
    product: TProduct
}

const AvoProduct: React.FC<TypeProps> = ({ product }) => {

    const { quantity, removeFromCart } = React.useContext(AppContext)

    const handleRemoveAvo = (product: TProduct) => {
        removeFromCart(product)
    }

    return (
        <section className="Avo-product border-b w-2/4 flex justify-between mx-auto mb-4 items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32" />
            <div className="Avo-info w-8/12">
                <h1 className="text-green-400 font-bold"> {product.name} </h1>
                <h3 className="text-gray-400"> 1 x {product.price} </h3>
                <p> <b>Taste:</b> {product.attributes.taste} </p>
            </div>
            <button className="w-8 h-8 border rounded-full border-red-600 text-red-600"
            onClick = {() => handleRemoveAvo(product)}
            > X 
            </button>
        </section>
    )
}

export default AvoProduct