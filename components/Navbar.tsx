import React from 'react'
import Link from 'next/link'
import AppContext from '@/context/AppContext'
import { useRouter } from 'next/router'

const Navbar = () => {

    const context = React.useContext(AppContext)
    const { cart } = context
    const route = useRouter()

    return (
        <nav className="Navbar border-b-2 border-r border-l rounded-b-md h-16 border-green-400 flex items-center">
            <ul className="Navbar-ul flex justify-between w-2/4 mx-auto my-4">
                <Link href="/">
                    <li className={`px-6 h-16 flex items-center ${route.pathname == '/' ? 'bg-gray-200 border-green-400 border-b' : null}`}>
                        <img src="https://img.icons8.com/?size=1x&id=9Dv8Wi1vh0yp&format=png" alt="avo" className="w-8 h-8"/>
                        &nbsp; <p className="font-bold text-green-600">Avo Store</p>
                    </li>
                </Link>
                <Link href="/cart">
                    <li className={`px-6 h-16 flex items-center ${route.pathname == '/cart' ? 'bg-gray-200 border-green-400 border-b' : null}`}>
                        <img src="https://img.icons8.com/?size=1x&id=13014&format=png" alt="cart" className="w-8 h-8"/>
                        <p className="font-bold text-green-500">Canasta ({cart.length})</p> 
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar