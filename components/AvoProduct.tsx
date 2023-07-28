import React from 'react'
import AppContext from '@/context/AppContext'

interface TypeProps {
    product: TProduct
}

const AvoProduct: React.FC<TypeProps> = ({ product }) => {

    const { removeFromCart } = React.useContext(AppContext)
    const [quant, setQuant] = React.useState(product.cantidad + 1)

    const handleRemoveAvo = (product: TProduct) => {
        if (product.cantidad > 0) {
            setQuant(product.cantidad --)
        } else {
            removeFromCart(product)
        }
    }

    return (
        <section className="Avo-product border-b w-2/4 flex justify-between mx-auto mb-4 items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32" />
            <div className="Avo-info w-8/12">
                <h1 className="text-green-400 font-bold"> {product.name} </h1>
                <h3 className="text-gray-400"> {quant} x <b>$</b> {1000 *product.price} COP</h3>
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