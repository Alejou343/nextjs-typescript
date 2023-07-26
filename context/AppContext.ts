import React from 'react';

interface AppContextType {
    avocados: TProduct[]
    cart: TProduct[]
    addToCart: (payload: TProduct) => void
}

const AppContext = React.createContext<AppContextType>({} as AppContextType)

export default AppContext