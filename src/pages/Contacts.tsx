import Navbar from "../components/Navbar";
import { ParallaxMain } from "../components/ParallaxMain";
import BG from '../assets/doctor-contacts.png';
import { motion, useScroll, useTransform } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faStethoscope, faUserTie, faBedPulse, faSquarePhone, faSquareEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import FormContacts from "../components/FormContacts";
import CustomModal from "../components/CustomModal";
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const [show, setShow] = useState(false);

    const onHide = () => setShow(false);
    const onShow = () => setShow(true);

    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const [t] = useTranslation();

    const { scrollYProgress } = useScroll({ target: sectionRef1, offset: ['start end', 'end end'] });
    const { scrollYProgress: scrollYProgress2 } = useScroll({ target: sectionRef2, offset: ['start end', 'end end'] });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const opacity3 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [500, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y3 = useTransform(scrollYProgress2, [0, 1], [-700, 0]);

    const locations: any[] = t('contacts.locations.addresses', {returnObjects: true});
    const infoOptions: any[] = t('contacts.contacts.info', {returnObjects: true});

    useEffect(() => {
        document.title = `${t('titles.contacts')} | VMC`;
    }, [t]);

    return (
        <>
            <Navbar />
            <div>
                <motion.div style={{ opacity: opacity2, y: y2 }}>
                    <ParallaxMain id={2} img={BG} title={[t('contacts.title'), '']} subtitle={t('contacts.subtitle')} buttonText={t('buttons.contactUs')} withLeft={false} anchorId={'#contacts'} />
                </motion.div>
                <section ref={sectionRef1} id='contacts'>
                    <motion.div className={'contact-container'} style={{ opacity, y }}>
                        <Row className={'justify-content-between info-container'}>
                            <Col className={'border-end'}>
                                <h2 className={"mb-4"}>
                                    {t('contacts.locations.title')}
                                </h2>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faUserTie} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{locations[0].title}</p>
                                        <span>{locations[0].address}</span>
                                    </Col>
                                </Row>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faStethoscope} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{locations[1].title}</p>
                                        <span>{locations[1].address}</span>
                                    </Col>
                                </Row>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faBedPulse} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{locations[2].title}</p>
                                        <span>{locations[2].address}</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className={"border-start"}>
                                <h2 className={"mb-5"}>{t('contacts.contacts.title')}</h2>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faSquarePhone} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{infoOptions[0]}</p>
                                        <a href='tel:+7 (771) 904 19 30'>+7 (771) 904 19 30</a>
                                    </Col>
                                </Row>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faSquareEnvelope} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{infoOptions[1]}</p>
                                        <a href='mailto:vladikobdk@gmail.com'>vladikobdk@gmail.com</a>
                                    </Col>
                                </Row>
                                <Row className={"mb-4"}>
                                    <Col className={'col-md-2 d-flex justify-content-center align-items-center'}>
                                        <FontAwesomeIcon icon={faAddressCard} size={"3x"} />
                                    </Col>
                                    <Col>
                                        <p>{infoOptions[2]}</p>
                                        <a href='mailto:230765@astanait.edu.kz'>230765@astanait.edu.kz</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </motion.div>
                </section>
                <section ref={sectionRef2} id='contacts-form-section'>
                    <motion.div style={{ opacity: opacity3, y: y3 }}>
                        <FormContacts onSubmit={onShow}/>
                    </motion.div>
                </section>
            </div>
            <CustomModal show={show} onHide={onHide} title={t('contacts.form.modal.head')} body={t('contacts.form.modal.body')} />
        </>
    );
}

export default Contacts;

