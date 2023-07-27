import React from 'react'
import AppContext from '@/context/AppContext'
import AvoProduct from '@/components/AvoProduct'

const Cart = () => {

    const context = React.useContext(AppContext)
    const { cart } = context

    const randomKey = () => {
        return Math.random().toString(36).substring(2, 5)
    }

    return (
        <section className="Cart mt-8 px-4">
            { cart.length === 0 ? <div className="Cart-info border border-yellow-200 bg-yellow-100 rounded-md w-2/4 mx-auto p-2">
                <h1 className="text-yellow-700 font-bold">Your cart is empty</h1>
                <h2 className="text-yellow-400">You will need to add some items to the cart before you can checkout.</h2>
            </div> : 

            cart.map((product: TProduct) => <AvoProduct key={ randomKey() } product = { product } />)}

            <div className="Cart-separator h-0 border w-2/4 mx-auto my-4"></div>
            <div className="Cart-resume border rounded-md w-2/4 mx-auto flex justify-between h-20 p-6 items-center">
                <h1><b>Sub total:</b> {cart.length}</h1>
                <button className="bg-black text-white font-bold rounded-lg w-28 h-10">Checkout</button>
            </div>
        </section>
    )
}

export default Cart