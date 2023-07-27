import React from 'react'
import Link from 'next/link'

const GameContent = () => {

    const [ answer, setAnswer ] = React.useState<string>('')
    const [ charge, setCharge ] = React.useState<boolean>(false)

    const randomAnswer = () => {
        setCharge(true)
        setTimeout(() => {            
            if (Math.floor(Math.random() * 11) % 2 === 0) {
                setAnswer('YES')
            } else {
                setAnswer('NO')
            }
            setCharge(false)
        }, 1500);
    }

    return (
        <div className="Game flex flex-col justify-center items-center my-8">
            <h1 className={`font-semibold text-8xl ${charge ? 'text-gray-400' : 'text-green-500'} mb-4`}>{answer}</h1>
            <button 
            className="bg-green-500 text-white rounded-md my-2 w-36 h-12 font-semibold text-sm flex justify-center items-center"
            onClick = {randomAnswer}>
                {charge ? <div className="loading-spinner border-4 border-green-300"></div> : 'Intentar de nuevo'}
            </button>
            <Link href="/">
                <button className="border rounded-md my-2 w-36 h-12 text-sm border-black">
                    Volver al inicio
                </button>
            </Link>
        </div>
    )
}

export default GameContent