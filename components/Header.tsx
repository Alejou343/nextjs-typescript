import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center h-20 mb-8 mt-14">
            <h1 className="font-bold text-3xl mb-6 flex items-center">
                <p className="text-green-700">Avocado</p> &nbsp; 
                <Image src="/images/headerIcon.png" alt="Avo" width={64} height={64} />
                &nbsp; <p className="text-yellow-800">Store</p>
            </h1>
            <Link href="/yes-or-no" className="text-yellow-300 font-semibold mb-8"> Should I eat an avocado today?</Link>
        </div>
    )
}

export default Header