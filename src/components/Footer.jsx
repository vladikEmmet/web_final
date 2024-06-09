import React from 'react'
import BG2 from '../assets/bag-02.png'
import { motion } from 'framer-motion'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const [activeBullet, setActiveBullet] = React.useState(0);
    const [t] = useTranslation();
    const [first, second] = t('footer.designedBy', {returnObjects: true});

    return (
        <motion.div
            className='contact-styled'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1 }}
        >
            <div className='contact-left'>
                <h3>Vladislav Medical Center</h3>
                <div className='left-locations'>
                {activeBullet === 0 ? (
                    <>

                            <div>
                                <p>WT-1 @ Front-end</p>
                                <span>Zarina Kutpanova</span>
                            </div>

                            <div>
                                <p>{`${first} @ ${second}`}</p>
                                <span>BDA-2303 | Jun, 2024</span>
                            </div>
                    </>
                ) : activeBullet === 1 ? (
                    <>
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faPhone}/> {t('footer.phone')}
                            </p>
                            <span>
                                <a href='tel: +7 (771) 904 19 30'>+7 (771) 904-19-30</a>
                            </span>
                        </div>

                        <div>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} /> {t('footer.address.title')}
                            </p>
                            <span>
                                <a href="#">{t('footer.address.value')}</a>
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </p>
                            <span>
                                <a href='mailto:vladikobdk@gmail.com'>vladikobdk@gmail.com</a>
                            </span>
                        </div>

                        <div>
                            <p>
                                <FontAwesomeIcon icon={faCircleInfo}/> {t('footer.reception')}
                            </p>
                            <span>
                                <a href='mailto:230765@astanait.edu.kz'>230765@astanait.edu.kz</a>
                            </span>
                        </div>
                    </>
                )

                }
                </div>

                <div className='dots'>
                    {[1, 2, 3].map((dot, index) => (
                        <span
                            key={index}
                            className={activeBullet === index ? 'active' : ''}
                            onClick={() => setActiveBullet(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className='contact-right'>
                <div className='right-img'>
                    <img src={BG2} alt="Contact" />
                </div>
                <div className='right-data'>
                    <h3>{t('footer.news.title')}</h3>
                    <p> {t('footer.news.subtitle')}</p>
                    <span>{t('footer.news.readMore')}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer