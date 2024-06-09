import Navbar from "../components/Navbar";
import {useEffect, useRef} from "react";
import {ParallaxMain} from "../components/ParallaxMain";
import BG from '../assets/doctor-main.png';
import {motion, useScroll, useTransform} from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faMicrochip, faUserDoctor, faUsersViewfinder, faLocationDot, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import img1 from '../assets/about-img1.jpeg';
import img2 from '../assets/about-img2.webp';
import img3 from '../assets/about-img3.webp';
import img4 from '../assets/about-img4.jpeg';
import img5 from '../assets/about-img5.jpeg';
import {StreamlinedExperience} from "../components/StreamlinedExperience";
import {NoLockin} from "../components/NoLockIn";
import {useTranslation} from "react-i18next";

const About = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });


    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);
    const [t] = useTranslation();

    const advantages: any[] = t('aboutUs.advantages', {returnObjects: true});
    const textCards: any[] = t('aboutUs.cards', {returnObjects: true});

    useEffect(() => {
        document.title = `${t('titles.about')} | VMC`;
        document.querySelector('.app-styled')?.classList.add('overflow');
        AOS.init();

        return () => {
            document.querySelector('.app-styled')?.classList.remove('overflow');
        }
    }, [t]);

    return (
        <>
            <Navbar />
            <div>
                <motion.section
                    ref={targetRef}
                    style={{opacity, y}}
                    className={'about-section1'}
                >
                    <ParallaxMain
                        id={0}
                        img={BG}
                        title={t('aboutUs.title', {returnObjects: true})}
                        subtitle={t('aboutUs.subtitle')}
                        anchorId={'#features'}
                        withLeft={false}
                        buttonText={t('buttons.learnMore')}
                    />
                </motion.section>
                <motion.section id='features'
                                className={'about-section2'}
                >
                    <Row className={'justify-content-between align-items-start mb-5'}>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faUser} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2>{advantages[0].title}</h2>
                                <p>{advantages[0].description}</p>
                            </div>
                        </Col>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faMicrochip} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2>{advantages[1].title}</h2>
                                <p>{advantages[1].description}</p>
                            </div>
                        </Col>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faUserDoctor} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2 className={'smaller'}>{advantages[2].title}</h2>
                                <p>{advantages[2].description}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'justify-content-between align-items-start'}>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faUsersViewfinder} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2 className={'smaller'}>{advantages[3].title}</h2>
                                <p>{advantages[3].description}</p>
                            </div>
                        </Col>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faLocationDot} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2>{advantages[4].title}</h2>
                                <p>{advantages[4].description}</p>
                            </div>
                        </Col>
                        <Col className={'col-md-4'}>
                            <div className="flex flex-column">
                                <FontAwesomeIcon icon={faTruckMedical} size={'3x'} className={'mb-3 mx-1'}/>
                                <h2>{advantages[5].title}</h2>
                                <p>{advantages[5].description}</p>
                            </div>
                        </Col>
                    </Row>
                </motion.section>
                <motion.section id={'about-section3'}>
                    <Row data-aos='fade-right' data-aos-duration={'1000'} data-aos-offset={'400'}>
                        <Col className={'col-md-4'}>
                            <img src={img1} alt={'img1'} className={'rounded-left'}/>
                        </Col>
                        <Col className={'col-md-5'}>
                            <p>{textCards[0]}</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-end'} data-aos='fade-left' data-aos-duration={'1000'}
                         data-aos-offset={'400'}>
                        <Col className={'col-md-5'}>
                            <p>{textCards[1]}</p>
                        </Col>
                        <Col className={'col-md-4'}>
                            <img src={img2} alt={'img1'} className={'rounded-right'}/>
                        </Col>
                    </Row>
                    <Row data-aos='fade-right' data-aos-duration={'1000'} data-aos-offset={'400'}>
                        <Col className={'col-md-4'} style={{position: 'relative'}}>
                            <img src={img3} alt={'img1'} className={'rounded-left'}/>
                        </Col>
                        <Col className={'col-md-5'}>
                            <p>{textCards[2]}</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-end'} data-aos='fade-left' data-aos-duration={'1000'}
                         data-aos-offset={'400'}>
                        <Col className={'col-md-5'}>
                            <p>{textCards[3]}</p>
                        </Col>
                        <Col className={'col-md-4'}>
                            <img src={img4} alt={'img1'} className={'rounded-right'}/>
                        </Col>
                    </Row>
                    <Row data-aos='fade-right' data-aos-duration={'1000'} data-aos-offset={'400'}>
                        <Col className={'col-md-4'}>
                            <img src={img5} alt={'img1'} className={'rounded-left'}/>
                        </Col>
                        <Col className={'col-md-5'}>
                            <p>{textCards[4]}</p>
                        </Col>
                    </Row>
                </motion.section>
                <StreamlinedExperience />
                <NoLockin />
            </div>
        </>
    )
}

export default About
