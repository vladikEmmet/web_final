import React from 'react'
import { List } from 'phosphor-react'
import { motion } from 'framer-motion'

const Sidebar = () => {
    return (
        <motion.aside
            className='sidebar-styled'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, delay: .25 }}
        >
            <div className='menu-btn'>
                <List size={25} />
            </div>
            <div className='social'>
                <span>Tw</span>
                <span>In</span>
                <span>Fb</span>
            </div>
        </motion.aside>
    )
}

export default Sidebar