import React from 'react'
import Link from 'next/link'
import AppContext from '@/context/AppContext'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {

    const context = React.useContext(AppContext)
    const { cart } = context
    const route = useRouter()

    return (
        <nav className="Navbar border-b-2 border-r border-l rounded-b-md h-16 border-green-400 flex items-center">
            <ul className="Navbar-ul flex justify-between w-2/4 mx-auto my-4">
                <Link href="/">
                    <li className={`px-6 h-16 flex items-center ${route.pathname == '/' ? 'bg-gray-200 border-green-400 border-b' : null}`}>
                        <Image src="/images/avoIcon.png" width={32} height={32} alt="avo" className="w-8 h-8" />
                        &nbsp; <p className="font-bold text-green-600">Avo Store</p>
                    </li>
                </Link>
                <Link href="/cart">
                    <li className={`px-6 h-16 flex items-center ${route.pathname == '/cart' ? 'bg-gray-200 border-green-400 border-b' : null}`}>
                        <Image src="/images/cartIcon.png" width={32} height={32} alt="cart" className="w-8 h-8"/>
                        <p className="font-bold text-green-500">Avo Cart ({cart.length})</p> 
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar