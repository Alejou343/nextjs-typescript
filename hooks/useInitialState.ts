import React from 'react';

const useInitialState = () => {

    const API: string = "/api/avo"
    const [cart, setCart] = React.useState<TProduct[]>([])
    const [avocados, setAvocados] = React.useState<TProduct[]>([])

    const fetchData = (url: string) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setAvocados(data.data))
    } 

    React.useEffect(() => {
        fetchData(API)
    }, [])

    const addToCart = (payload: TProduct, number: number) => {
        if (cart.some(x => x === payload)) {
            payload.cantidad += number 
        } else {
            payload.cantidad += number - 1
            setCart([...cart, payload])
        }
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