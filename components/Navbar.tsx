import React from 'react'
import Link from 'next/link'
import AppContext from '@/context/AppContext'

const Navbar = () => {

    const context = React.useContext(AppContext)
    const { cart } = context

    return (
        <nav className="Navbar border-b-2 border-r border-l rounded-b-md h-16 border-green-400 flex items-center">
            <ul className="Navbar-ul flex justify-between w-2/4 mx-auto my-4">
                <Link href="/">
                    <li className="px-6 h-16 flex items-center">
                        Avo Store
                    </li>
                </Link>
                <Link href="/cart">
                    <li className="px-6 h-16 flex items-center">
                        Canasta ({cart.length})
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar