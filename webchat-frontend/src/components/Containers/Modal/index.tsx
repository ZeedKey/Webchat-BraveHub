import { Box, colors, Grid, Modal, Typography as Item } from '@mui/material';
import React from 'react';

interface IModalProps {
    isModalOpen: any
    closeHandler: any
    style?: any
    children: React.ReactNode
}

export const ModalWindow: React.FC<IModalProps> = ({ children, closeHandler,isModalOpen }): JSX.Element => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid'+colors.blue[500],
        boxShadow: 24,
        p: 4,
      };
    return (
        <Modal
            open={isModalOpen}
            onClose={closeHandler}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}