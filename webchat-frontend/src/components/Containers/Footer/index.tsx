import { Box, Grid, Typography as Item } from '@mui/material';
import React from 'react';

export const Footer: React.FC = (): JSX.Element => {
    const FooterStyle = {
        alignItems: 'center',
        display: 'flex',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    }
    return (
        <Box gap={5} component='footer' sx={{ ...FooterStyle }}>
            <Item variant="h4" component="h2">BraveHub</Item>
            <Item>About us</Item>
            <Item>Sign up</Item>
        </Box>
    )
}