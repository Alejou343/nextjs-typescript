import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="Footer relative border-t mt-7 h-80">
            <ul className="Footer-ul flex justify-between w-2/4 mx-auto my-5 h-20 items-center">
                <li className="w-50">
                    <p className="font-bold">About us</p>
                    <Link href="/about" className="text-blue-400">Know more</Link>
                </li>
                <li className="w-50">
                    <p className="font-bold">Servicios</p>
                    <Link href="/" className="text-blue-400">All Products</Link>
                </li>
                <li className="w-50">
                    <p className="font-bold">Made by</p>
                    <span>Develop my &nbsp;
                        <a href="http://alejou343.github.io/bootstrap/" className="text-blue-400" target='blank'>portfolio, <br/> </a> 
                            created by &nbsp;
                        <a href="http://www.instagram.com/alejou343/" className="text-blue-400" target='blank'>@Alejou343</a>
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