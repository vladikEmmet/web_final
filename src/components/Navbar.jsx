import React from 'react';
import { List, MagnifyingGlass } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import {useTranslation} from "react-i18next";

const links = [
    { id: 1, name: 'home', url: '/' },
    { id: 2, name: 'services', url: '/services' },
    { id: 3, name: 'about', url: '/about' },
    { id: 4, name: 'contacts', url: '/contacts' },
    { id: 5, name: 'certifications', url: '/certificates' },
];

const Navbar = () => {
    const location = useLocation();
    const [isSearch, setIsSearch] = React.useState(false);
    const [t] = useTranslation();

    return (
        <motion.nav
            className={`navbar-styled ${isSearch ? 'searched' : ''}`}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .75 }}
        >
            <h2 className='logo'>Vmc</h2>
            <div className='links-styled'>
                <AnimatePresence>
                    {!isSearch && (
                        <motion.div
                            className='links'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="links"
                            transition={{ duration: 0.5 }}
                        >
                            {
                                links.map((link) => (
                                    <Link to={link.url} className={location.pathname === link.url ? 'active' : ''} key={link.id}>{t(`navbar.${link.name}`)}</Link>
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isSearch && (
                        <motion.input
                            type='text'
                            placeholder={`${t('navbar.search')}`}
                            className='search-input'
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: '300px', opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            key="search-input"
                        />
                    )}
                </AnimatePresence>
                <MagnifyingGlass size={20} className={`search ${isSearch ? 'active' : ""}`} onClick={() => setIsSearch(prev => !prev)} />
                <List size={20} className='btn-mobile' />
            </div>
        </motion.nav>
    );
}

export default Navbar;

