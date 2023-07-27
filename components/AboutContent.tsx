import React from 'react'
import facts from '@/database/facts'
import FactCard from '@/components/FactCard'

const AboutContent = () => {
  return (
    <div className="About-content flex flex-col justify-center">
        <h1 className="mx-auto font-bold my-8 text-3xl">13 Surprising Facts About Avocados</h1>
        <img src="./images/avocados.jpg" alt="Avocados" className="w-2/4 mx-auto rounded-md" />
        <p className="text-center mb-8 mt-2">Originally from <a href="/" className="text-blue-400">Taste of home</a></p>
        <div className="Products grid grid-cols-2 gap-6 w-2/4 mx-auto mb-4">
            {facts.map(fact => <FactCard key={fact.id} title={fact.title} description={fact.description} id={fact.id} />)}
        </div>
    </div>
  )
}

export default AboutContent