import {FC, useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface ParallaxMainProps {
    id: number;
    img: any;
    title: string[];
    subtitle: string;
    withLeft?: boolean;
    anchorId?: string;
    buttonText?: string;
    className?: string;
}

export const ParallaxMain: FC<ParallaxMainProps> = ({id, img, title, subtitle, withLeft = true, anchorId, buttonText = "Learn More", className}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end start', 'end end'] });
    // const y = useParallax(scrollYProgress, 100);
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
    const [t] = useTranslation();



    if(id === 0) {
        return (
            <div className={`slide parallax-slide ${className || ''}`}>
                <div className='home-styled parallax-container' ref={ref}>
                    <div
                        className="home-container"
                    >
                        <motion.img
                            className='home-image'
                            src={img}
                            alt="Bg"
                        />
                        <div className='home-data'>
                            <motion.div className='data-left'
                                        initial={{opacity: 0, x: -50}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: .5, delay: .75}}
                            >
                                {withLeft &&
                                    <>
                                        <h4>{'/0' + (id + 1)}</h4>
                                        <div className='lines'>
                                            <span/>
                                        </div>
                                        <p>{t('parallaxMainLeft.medicalCenter')}</p>
                                        <p className='inactive'>{t('parallaxMainLeft.outOfWhite')}</p>
                                        <p className='inactive'>{t('parallaxMainLeft.contactUs')}</p>
                                    </>
                                }
                            </motion.div>

                            <motion.div
                                className='data-right'
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: .5, delay: .5}}
                            >
                                <h1>{title[0]}<br/>{title[1]}</h1>
                                <p>{subtitle}</p>
                                {anchorId && anchorId.length > 0 ? <a href={anchorId} className='learn-more-btn'>{buttonText}</a> : <Link className='learn-more-btn' to={'/about'}>{t('buttons.learnMore')}</Link>}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='slide'>
            <div className='home-styled parallax-container'>
                <div
                    className="home-container"
                    ref={ref}
                >
                    <img
                        className={`home-image ${id === 2 ? 'second' : ''}`}
                        src={img}
                        alt="Bg"
                    />
                    <div className='home-data'>
                        <motion.div className='data-left'
                                    style={{y}}
                        >
                            {withLeft &&
                                <>
                                    <h4>{'/0' + (id + 1)}</h4>
                                    <div className='lines'>
                                        <span/>
                                    </div>
                                    <p className='inactive'>{t('parallaxMainLeft.medicalCenter')}</p>
                                    <p className={id === 1 ? '' : 'inactive'}>{t('parallaxMainLeft.outOfWhite')}</p>
                                    <p className={id === 2 ? '' : 'inactive'}>{t('parallaxMainLeft.contactUs')}</p>
                                </>
                            }
                        </motion.div>

                        <motion.div
                            className='data-right'
                            style={{y}}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: .5, delay: .5}}
                        >
                            <h1>{title[0]}<br/>{title[1]}</h1>
                            <p>{subtitle}</p>
                            {(anchorId && anchorId.length > 0) ? (<a href={anchorId} className='learn-more-btn'>{buttonText}</a>) : (id === 1) ? ( <Link className='learn-more-btn' to={'/certificates'}>{t('buttons.certifications')}</Link> ) : (<Link to={'/contacts'} className='learn-more-btn'>{t('buttons.contactUs')}</Link>)}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
