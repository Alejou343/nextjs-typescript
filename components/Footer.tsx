import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="Footer relative border-t mt-7 h-80">
            <ul className="Footer-ul flex justify-between w-2/4 mx-auto my-5 h-20 items-center">
                <li className="w-50">
                    <p className="font-bold">Nosotros</p>
                    <Link href="/about" className="text-blue-400">Conoce más</Link>
                </li>
                <li className="w-50">
                    <p className="font-bold">Servicios</p>
                    <Link href="/" className="text-blue-400">Todos los productos</Link>
                </li>
                <li className="w-50">
                    <p className="font-bold">Hecho para</p>
                    <span>Desarrollar mi &nbsp;
                        <Link href="/" className="text-blue-400">portafolio, &nbsp;</Link> 
                            creado por
                        <Link href="/" className="text-blue-400">@Alejou343</Link>
                    </span>
                </li>
            </ul>
            <div className="Ender flex flex-col text-gray-400 text-xs text-center">
                <span>
                    Icons made by Freepik from <Link href="/" className="text-blue-400">www.flaticon.com</Link> 
                </span>
                <span>
                    Avocado images taken from <Link href="/" className="text-blue-400">Avocado 101</Link> at <Link href="/" className="text-blue-400">California Avocado</Link>
                </span>
            </div>
        </div>
    )
}

export default Footer