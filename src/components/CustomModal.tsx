import {FC} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

interface CustomModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    body: string;
}

const CustomModal: FC<CustomModalProps> = ({show, onHide, title, body}) => {
    const [t] = useTranslation();

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title className={'modal-title'}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={'modal-body'}>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {t('contacts.form.modal.close')}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;