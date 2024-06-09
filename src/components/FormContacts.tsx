import {FC, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";

interface FormContactsProps {
    onSubmit: () => void;
}

const FormContacts: FC<FormContactsProps> = ({onSubmit}) => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [t] = useTranslation();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            onSubmit();
        }

        setValidated(true);
    };

    const chngFn = (event: any, name: string) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className={'form-contacts'}>
            <h2 className={"mb-5"}>{t('contacts.form.title')}</h2>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01" className={'mb-2'}>
                    <Form.Label>{t('contacts.form.firstName.title')}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t('contacts.form.firstName.placeholder')}
                        value={formData.name}
                        onChange={(e) => chngFn(e, 'name')}
                        minLength={2}
                        pattern={"^[a-zA-Zа-яА-Я]+$"}
                        isInvalid={validated && formData.name.length < 2 && /\d/gi.test(formData.name)}
                    />
                    <Form.Control.Feedback type='invalid'>{t('contacts.form.firstName.invalid')}</Form.Control.Feedback>

                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>{t('contacts.form.phone.title')}</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="+7 (771) 904 19 30"
                        value={formData.phone}
                        onChange={(e) => chngFn(e, 'phone')}
                        minLength={10}
                        pattern={"^\d{10}$"}
                        maxLength={10}
                        isInvalid={validated && formData.phone.length <= 10 && formData.phone.length >= 13 && !/\D/gi.test(formData.phone)}
                    />
                    <Form.Control.Feedback type='invalid'>{t('contacts.form.phone.invalid')}</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label={t('contacts.form.checkBox.title')}
                    feedback={t('contacts.form.checkBox.invalid')}
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit" variant={'warning'}>{t('contacts.form.button')}</Button>
        </Form>
    )
}

export default FormContacts;

