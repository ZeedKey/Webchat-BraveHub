import { Alert as AlertPopUp } from "react-bootstrap"

interface IAlertProps {
    children: React.ReactNode
    title: string
    onClose: any
}

export const Alert: React.FC<IAlertProps> = ({ children, title, onClose }) => {
    return (
        <AlertPopUp variant="danger" onClose={onClose} dismissible>
            <AlertPopUp.Heading>{title}</AlertPopUp.Heading>
            <p>
                {children}
            </p>
        </AlertPopUp>
    )
}