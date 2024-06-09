import React from 'react'
import { List } from 'phosphor-react'
import { motion } from 'framer-motion'
import {useTranslation} from "react-i18next";

const Sidebar = () => {
    const [isActive, setIsActive] = React.useState(true);
    const {i18n} = useTranslation();

    return (
        <>
            <motion.div
                className='menu-btn'
                onClick={() => setIsActive(prev => !prev)}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: .7, delay: .45}}
            >
                <List size={25}/>
            </motion.div>
            <motion.aside
                className={`sidebar-styled ${isActive ? 'active' : ''}`}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: .5, delay: .25}}
            >
                <div className='social'>
                    <span onClick={() => i18n.changeLanguage('en-US')} className={i18n.language === 'en-US' ? 'text-[var(--color)]' : ''}>En</span>
                    <span onClick={() => i18n.changeLanguage('ru-RU')} className={i18n.language === 'ru-RU' ? 'text-[var(--color)]' : ''}>Ru</span>
                    <span onClick={() => i18n.changeLanguage('kz-KZ')} className={i18n.language === 'kz-KZ' ? 'text-[var(--color)]' : ''}>Kz</span>
                </div>
            </motion.aside>
        </>
    )
}

export default Sidebar