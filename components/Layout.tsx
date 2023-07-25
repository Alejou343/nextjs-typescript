import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default Layout