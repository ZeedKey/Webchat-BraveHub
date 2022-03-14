import { Box, Grid, Typography as Item } from '@mui/material';
import React from 'react';

export const Header: React.FC = (): JSX.Element => {
    const HeaderStyle = {
        alignItems: 'center',
        display: 'flex',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
    }
    return (
        <Box gap={5} component='header' sx={{ ...HeaderStyle }} justifyContent={"space-between"}>
            <div>
                <Item variant="h4" component="h2">BraveHub</Item>
                <Item>About us</Item>
            </div>
            <Item>Sign up</Item>
        </Box>
    )
}