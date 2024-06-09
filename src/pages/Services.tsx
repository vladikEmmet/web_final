import Navbar from "../components/Navbar";
import {useEffect, useRef} from "react";
import {ParallaxMain} from "../components/ParallaxMain";
import BG from '../assets/doctor-main.png';
import {motion, useScroll, useTransform} from "framer-motion";
import Row from "react-bootstrap/Row";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Col from "react-bootstrap/Col";
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpeg'
import Accordion from "react-bootstrap/Accordion";
import {useTranslation} from "react-i18next";

const Services = () => {
    const ref = useRef(null);


    const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'center end'] });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const [t] = useTranslation();

    const dentistry: any = t('ourServices.ourServicesSection.dentistry', {returnObjects: true});
    const cardiology: any = t('ourServices.ourServicesSection.cardiology', {returnObjects: true});
    const orthopedics: any = t('ourServices.ourServicesSection.orthopedics', {returnObjects: true});
    const dermatology: any = t('ourServices.ourServicesSection.dermatology', {returnObjects: true});
    const neurology: any = t('ourServices.ourServicesSection.neurology', {returnObjects: true});

    const textCards: any[] = t('ourServices.text', {returnObjects: true});

    useEffect(() => {
        document.title = `${t('titles.services')} | VMC`;
        AOS.init({once: true});
    }, [t]);

    return (
        <>
            <Navbar />
            <div>
                <motion.div
                    style={{opacity, y}}
                >
                    <ParallaxMain
                        id={0}
                        img={BG}
                        title={t('ourServices.title', {returnObjects: true})}
                        subtitle={t('ourServices.subtitle')}
                        withLeft={false}
                        anchorId={'#row1'}
                        buttonText={t('buttons.learnMore')}
                    />
                </motion.div>
                <section id='services' ref={ref}>
                    <motion.div className="services-container">
                        <Row data-aos='fade-right' data-aos-duration={'1000'} data-aos-offset={'400'} className={'mb-5 row-container'} id={'row1'}>
                            <Col className={'col-md-5 col-12'}>
                                <img src={service1} alt={'Service1'} className={'rounded-left'}/>
                            </Col>
                            <Col className={'col-md-7 col-sm12 d-flex flex-column justify-content-center'}>
                                <p>{textCards[0]}</p>
                            </Col>
                        </Row>
                        <Row data-aos='fade-left' data-aos-duration={'1000'} data-aos-offset={'400'} className={'justify-content-end mb-5 row-container rounded-left'}>
                            <Col className={'col-md-7 col-sm12 d-flex flex-column justify-content-center'}>
                                <p>{textCards[1]}</p>
                            </Col>
                            <Col className={'col-md-5 col-12'}>
                                <img src={service2} alt={'Service2'} className={'rounded-right'}/>
                            </Col>
                        </Row>
                        <Row data-aos='fade-right' data-aos-duration={'1000'} data-aos-offset={'400'} className={'mb-5 row-container'}>
                            <Col className={'col-md-5 col-12'}>
                                <img src={service3} alt={'Service3'} className={'rounded-left'}/>
                            </Col>
                            <Col className={'col-md-7 col-12 d-flex flex-column justify-content-center'}>
                                <p>{textCards[2]}</p>
                            </Col>
                        </Row>
                    </motion.div>
                </section>

                <section id='services-accrodion'>
                    <motion.div>
                        <h2>{t('ourServices.ourServicesSection.title')}</h2>
                        <Accordion className={'mt-4'}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{dentistry.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{dentistry.subpoints[0].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dentistry.subpoints[0].points[0]}</li>
                                                    <li>{dentistry.subpoints[0].points[1]}</li>
                                                    <li>{dentistry.subpoints[0].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>{dentistry.subpoints[1].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dentistry.subpoints[1].points[0]}</li>
                                                    <li>{dentistry.subpoints[1].points[1]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>{dentistry.subpoints[2].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dentistry.subpoints[2].points[0]}</li>
                                                    <li>{dentistry.subpoints[2].points[1]}</li>
                                                    <li>{dentistry.subpoints[2].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>{dentistry.subpoints[3].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dentistry.subpoints[3].points[0]}</li>
                                                    <li>{dentistry.subpoints[3].points[1]}</li>
                                                    <li>{dentistry.subpoints[3].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{cardiology.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{cardiology.subpoints[0].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{cardiology.subpoints[0].points[0]}</li>
                                                    <li>{cardiology.subpoints[0].points[1]}</li>
                                                    <li>{cardiology.subpoints[0].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>{cardiology.subpoints[1].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{cardiology.subpoints[1].points[0]}</li>
                                                    <li>{cardiology.subpoints[1].points[1]}</li>
                                                    <li>{cardiology.subpoints[1].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>{cardiology.subpoints[2].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{cardiology.subpoints[2].points[0]}</li>
                                                    <li>{cardiology.subpoints[2].points[1]}</li>
                                                    <li>{cardiology.subpoints[2].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{orthopedics.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{orthopedics.subpoints[0].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{orthopedics.subpoints[0].points[0]}</li>
                                                    <li>{orthopedics.subpoints[0].points[1]}</li>
                                                    <li>{orthopedics.subpoints[0].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>{orthopedics.subpoints[1].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{orthopedics.subpoints[1].points[0]}</li>
                                                    <li>{orthopedics.subpoints[1].points[1]}</li>
                                                    <li>{orthopedics.subpoints[1].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>{orthopedics.subpoints[2].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{orthopedics.subpoints[1].points[0]}</li>
                                                    <li>{orthopedics.subpoints[2].points[1]}</li>
                                                    <li>{orthopedics.subpoints[2].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{dermatology.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{dermatology.subpoints[0].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dermatology.subpoints[0].points[0]}</li>
                                                    <li>{dermatology.subpoints[0].points[1]}</li>
                                                    <li>{dermatology.subpoints[0].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>{dermatology.subpoints[1].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dermatology.subpoints[1].points[0]}</li>
                                                    <li>{dermatology.subpoints[1].points[1]}</li>
                                                    <li>{dermatology.subpoints[1].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>{dermatology.subpoints[2].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{dermatology.subpoints[2].points[0]}</li>
                                                    <li>{dermatology.subpoints[2].points[1]}</li>
                                                    <li>{dermatology.subpoints[2].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>{neurology.title}</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>{neurology.subpoints[0].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{neurology.subpoints[0].points[0]}</li>
                                                    <li>{neurology.subpoints[0].points[1]}</li>
                                                    <li>{neurology.subpoints[0].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>{neurology.subpoints[1].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{neurology.subpoints[1].points[0]}</li>
                                                    <li>{neurology.subpoints[1].points[1]}</li>
                                                    <li>{neurology.subpoints[1].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>{neurology.subpoints[2].title}</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className={'list-disc'}>
                                                    <li>{neurology.subpoints[2].points[0]}</li>
                                                    <li>{neurology.subpoints[2].points[1]}</li>
                                                    <li>{neurology.subpoints[2].points[2]}</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>
                </section>
            </div>
        </>
    )
}

export default Services