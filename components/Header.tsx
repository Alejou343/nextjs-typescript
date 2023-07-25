import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center h-20 mb-4 mt-10">
            <h1 className="font-bold text-3xl mb-6">AvocadoStore</h1>
            <Link href="/yes-or-no" className="text-blue-400 mb-8"> Debería comer un aguacate hoy? </Link>
        </div>
    )
}

export default Header