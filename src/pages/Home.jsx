import React from 'react'
import Navbar from '../components/Navbar'
import BG from '../assets/bag-01.png'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className='home-styled'>
            <Navbar />
            <img className='home-image' src={BG} alt="Bg" />
            <div className='home-data'>
                <motion.div className='data-left'
                    initial={{opacity: 0, x:-50}}
                    animate={{opacity: 1, x:0}}
                    transition={{duration: .5, delay: .75}}
                >
                    <h4>/01</h4>
                    <div className='lines'>
                        <span />
                    </div>
                    <p>Work Collection</p>
                    <span>Active Collection</span>
                    <span>Travel Collection</span>
                </motion.div>

                <motion.div
                    className='data-right'
                    initial={{opacity: 0, y:50}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: .5, delay: .5}}
                >
                    <h1>Work<br />Anywhere</h1>
                    <p>Introducing the Work Collection, a line of minimalist bags designed for a <span>new generation specifically for the modern professional</span></p>
                </motion.div>
            </div>
            <Contact />
        </div>
    )
}

export default Home