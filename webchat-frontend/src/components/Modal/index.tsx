import { Button, Modal } from 'react-bootstrap'

interface IModalProps {
    title?: string;
    children: React.ReactNode
    state: any;
    handleClose: any;
}

export const ModalWindow: React.FC<IModalProps> = ({ children, state, title, handleClose }) => {
    return (
        <Modal show={state}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}