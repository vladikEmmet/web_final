import React from 'react'
import BG2 from '../assets/bag-02.jpg'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div
            className='contact-styled'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1 }}
        >
            <div className='contact-left'>
                <h3>Events</h3>
                <div className='left-locations'>
                    <div>
                        <p>Pop-up @ Steven Alan Fillmore</p>
                        <span>SF — Sat, August 12 / 5-8PM</span>
                    </div>

                    <div>
                        <p>Pop-up @ Steven Alan Brooklyn</p>
                        <span>NYC — Sat, August 12 / 5-8PM</span>
                    </div>
                </div>

                <div className='dots'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='contact-right'>
                <div className='right-img'>
                    <img src={BG2} alt="Contact" />
                </div>
                <div className='right-data'>
                    <h3>News</h3>
                    <p> A fresh take on our Active Collection, just in time for spring. Available in black</p>
                    <span>Read More</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact