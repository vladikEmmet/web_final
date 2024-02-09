import React from 'react'
import { List, MagnifyingGlass } from 'phosphor-react'
import { motion } from 'framer-motion'

const links = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Products' },
    { id: 3, name: 'About' },
    { id: 4, name: 'Locations' },
    { id: 5, name: 'Cart' },
]

const Navbar = () => {
    return (
        <motion.nav
            className='navbar-styled'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .75 }}
        >
            <h2 className='logo'>Aer</h2>
            <div className='links-styled'>
                <div className='links'>
                    {
                        links.map((link) => (
                            <span key={link.id}>{link.name}</span>
                        ))
                    }
                </div>
                <MagnifyingGlass size={20} />
                <List size={20} className='btn-mobile' />
            </div>
        </motion.nav>
    )
}

export default Navbar