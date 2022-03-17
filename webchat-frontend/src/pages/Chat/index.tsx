import { common, grey } from '@mui/material/colors';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatCard } from '../../components/Card';
import { MainLayout } from '../../components/Layout/MainLayout';
import { UsetTextField as TextField } from '../../components/UserInputField';
const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 70%;
`
const ChatList = styled.div`
    display: table;
    height: 100vh;
    background: ${grey[100]};
`
const ChatField = styled.div`

`

export const Chat = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <MainLayout>
            <Grid>
                <ChatList>
                    <ChatCard>Heyeee</ChatCard>
                    <ChatCard>Heyeee</ChatCard>
                    <ChatCard>Heyeee</ChatCard>
                    <ChatCard>Heyeee</ChatCard>
                </ChatList>
                <ChatField>
                    <TextField/>
                </ChatField>
            </Grid>
        </MainLayout>

    );
}
