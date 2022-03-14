import { Box, colors, Container, Input, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: grid;
    gap: 30px;
    flex-direction: column;
    padding: 3rem 5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 5vmax;
    border-radius: 10px;
`

export const RegForm: React.FC<React.ReactNode> = (): JSX.Element => {
    return (
        // <Paper elevation={9}>
        <Form>
            <Typography mb={2} fontWeight={900} variant="h4" color={colors.blue[500]}>Sign in</Typography>
            <TextField
                required
                id="outlined-required"
                label="First name"
                defaultValue=""
            />
            <TextField
                required
                id="outlined-required"
                label="Second name"
                defaultValue=""
            />
            <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="example@mail.com"
            />
            <TextField
                required
                id="outlined-required"
                label="Password"
                defaultValue="Hello World"
            />
        </Form>
        // </Paper>

    )
}