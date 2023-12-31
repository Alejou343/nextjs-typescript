import React from 'react'
import AppContext from '@/context/AppContext'
import Image from 'next/image'

interface MyComponentProps {
    product: TProduct
}
const AvoDetails: React.FC<MyComponentProps> = ({product}) => {

    const context = React.useContext(AppContext)
    const [number, setNumber] = React.useState<number>(1)
    const [charge, setCharge] = React.useState<boolean>(false)
    const [alert, setAlert] = React.useState<boolean>(false)
    const { addToCart } = context

    const handleAddToCart = (product: TProduct, number: number) => {
        setCharge(true)
        
        setTimeout(() => {
            addToCart(product, number) 
            setCharge(false)
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 700);
        }, 1500);
    }

    return (
        <div className="Avo-info mt-12 mx-auto w-2/4 px-4">
            <div className="Avo-header flex items-center">
                <Image src={product.image} alt={product.name} className='w-80 h-80' width={320} height={320} />
                <div className="Avo-shopping p-4">
                    <h1 className="font-bold text-xl mb-4">{product.name}</h1>
                    <h3 className="text-gray-400"> <b>$</b> {1000 * product.price} COP </h3>
                    <h4 className="bg-gray-300 rounded-md w-5/12 text-center my-2 p-2 text-xs">SKU: {product.sku}</h4>
                    <div className="Avo-form input flex">
                        <input type="number" className="border px-2 border-gray-300 rounded-l-md h-10" min="1"
                        onChange= {(e) => setNumber(Number(e.target.value))}
                        />
                        <button 
                        className="bg-green-400 w-32 font-bold rounded-r-md text-white flex justify-center items-center"
                        onClick = {() => handleAddToCart(product, number)}>
                            {charge ? <div className="loading-spinner border-4 border-green-300" /> : 'Add to Cart'} 
                        </button>
                    </div>
                        {alert ? <h1 className="text-sm text-green-500 font-semibold mt-2">Product added</h1>: null}
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