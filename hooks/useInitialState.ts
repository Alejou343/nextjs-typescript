import React from 'react';

const useInitialState = () => {

    const API: string = "/api/avo"
    const [cart, setCart] = React.useState<TProduct[]>([])
    const [avocados, setAvocados] = React.useState<TProduct[]>([])

    const fetchData = (url: string) => {
        window.fetch(url)
        .then(response => response.json())
        .then(data => setAvocados(data.data))
    } 

    React.useEffect(() => {
        fetchData(API)
    }, [])

    const addToCart = (payload: TProduct) => {
        setCart([...cart, payload])
    }

    const removeFromCart = (payload: TProduct) => {
        const updateCart = cart.filter((avo: TProduct) => avo.id !== payload.id)
        setCart(updateCart)
    }

    return {
        cart,
        avocados,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;