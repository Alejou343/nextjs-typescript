import React from 'react';
import Link from 'next/link';

interface DataFromAPI {
    id: string
    name: string
    image: string
    price: number
}

const AvoCard: React.FC<DataFromAPI> = ({name, image, price, id}) => {
    return (
        <Link href={`/product/${id}`}>
            <section className="card border-green-200 border w-80 h-auto rounded-md cursor-pointer">
                <div className="avo-image">
                    <img src={image} alt={name} className="rounded-md"/>
                </div>
                <div className="avo-info border-t-8 border-green-200 bg-green-50">
                    <h2 className="font-bold px-4 py-2">{name}</h2>
                    <h4 className="pb-2 px-4 text-gray-400"> <b>$</b> {1000 * price} COP</h4>
                </div>
            </section>
        </Link>
    );
}

export default AvoCard;