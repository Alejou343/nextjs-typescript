import React from 'react'
import Link from 'next/link'

const GameContent = () => {

    const [ answer, setAnswer ] = React.useState('...')

    const randomAnswer = () => {
        if (Math.floor(Math.random() * 11) % 2 === 0) {
            return setAnswer('YES')
        } else {
            return setAnswer('NO')
        }
    }

    return (
        <div className="Game flex flex-col justify-center items-center my-8">
            <h1 className="font-semibold text-8xl text-green-500 mb-4">{answer}</h1>
            <button className="bg-green-500 text-white rounded-md my-2 w-36 h-12 font-semibold text-sm"
            onClick = {randomAnswer}
            >Intentar de nuevo</button>
            <Link href="/">
                <button className="border rounded-md my-2 w-36 h-12 text-sm border-black">
                    Volver al inicio
                </button>
            </Link>
        </div>
    )
}

export default GameContent