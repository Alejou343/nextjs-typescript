import React from 'react'

interface factProps {
    key: number,
    id: number,
    title: string,
    description: string
}

const FactCard: React.FC<factProps> = ({id, title, description}) => {
    return (
        <div className="Fact w-80">
            <div className="header flex items-center">
                <h1 className="text-7xl text-gray-400"> {id} </h1>
                <h2 className="font-bold"> {title} </h2>
            </div>
            <div className="description">
                <span> {description} </span>
            </div>
        </div>
    )
}

export default FactCard