import Navbar from '../components/Navbar';
import React, { useEffect, useRef } from 'react';
import BG from '../assets/dotor-certificates.png';
import { ParallaxMain } from "../components/ParallaxMain";
import Carousel from "react-bootstrap/Carousel";
import License1 from '../assets/license1.png';
import License2 from '../assets/license2.png';
import License3 from '../assets/license3.png';
import { motion, useScroll, useTransform } from "framer-motion";
import {useTranslation} from "react-i18next";

const Certificates = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);

    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [500, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const [t] = useTranslation();
    const licences: any[] = t('certifications.licences', {returnObjects: true});

    useEffect(() => {
        document.title = `${t('titles.certifications')} | VMC`;
    }, [t]);

    return (
        <>
            <Navbar />
            <div className='certificates-container'>
                <motion.div
                    style={{opacity: opacity2, y: y2}}
                >
                    <ParallaxMain
                        anchorId={'#carousel'}
                        buttonText={t('buttons.learnMore')}
                        id={0}
                        img={BG}
                        title={[t('certifications.title'), '']}
                        subtitle={t('certifications.subtitle')}
                        withLeft={false}
                    />
                </motion.div>
                <section ref={ref}>
                    <motion.div id='carousel' style={{ opacity, y }}>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <img src={License1} alt={'Medical License'} />
                                <Carousel.Caption>
                                    <h3>{licences[0].title}</h3>
                                    <p>{licences[0].description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={License2} alt={'Pharmacological License'} />
                                <Carousel.Caption>
                                    <h3>{licences[1].title}</h3>
                                    <p>{licences[1].description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={License3} alt={'Surgery License'} />
                                <Carousel.Caption>
                                    <h3>{licences[2].title}</h3>
                                    <p>{licences[2].description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </motion.div>
                </section>
                <section ref={ref2}>

                </section>
            </div>
        </>
    );
}

export default Certificates;