import AppContext from '@/context/AppContext'
import React from 'react'

interface MyComponentProps {
    product: TProduct
}
const AvoDetails: React.FC<MyComponentProps> = ({product}) => {

    const context = React.useContext(AppContext)
    const { cart, addToCart } = context

    const handleAddToCart = (product: TProduct) => {
        addToCart(product)    
    }

    return (
        <div className="Avo-info mt-12 mx-auto w-2/4">
            <div className="Avo-header flex items-center">
                <img src={product.image} alt={product.name} className='w-80 h-80'/>
                <div className="Avo-shopping p-4">
                    <h1 className="font-bold text-xl mb-4">{product.name}</h1>
                    <h3>{product.price}</h3>
                    <h4 className="bg-gray-300 rounded-md w-5/12 text-center my-2 p-2 text-xs">SKU: {product.sku}</h4>
                    <div className="input flex">
                        <input type="number" className="border px-2 border-gray-300 rounded-l-md h-10"/>
                        <button className="bg-green-400 w-32 font-bold rounded-r-md text-white"
                        onClick = {() => handleAddToCart(product)}
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="about-avo">
                <p className="font-bold text-xl mb-4">About this avocado</p>
                <span>{product.attributes?.description}</span>
            </div>
            <div className="separator h-0 border mt-2"></div>
            <div className="border mt-4 border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="bg-white divide-y divide-gray-300">
                        <tr className="bg-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 bg-gray-100">
                                Attributes
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 bg-gray-100">
                            </td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border-r">
                            Shape
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.attributes?.shape}</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border-r">
                            Hardiness
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.attributes?.hardiness}</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800 border-r">
                            Taste
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.attributes?.taste}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AvoDetails