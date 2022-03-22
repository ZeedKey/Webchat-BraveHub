import { Modal as ModalMUI, Box } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setModalClose } from "../../store/session";

interface IModalProps {
    children: any
    open: any,
}

export const Modal: React.FC<IModalProps> = ({ children, open }) => {
    const dispatch = useDispatch()
    const handleClose = () => dispatch(setModalClose());

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <ModalMUI
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                {children}
            </Box>
        </ModalMUI>
    )
}