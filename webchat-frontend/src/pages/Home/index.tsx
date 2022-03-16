import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { SignForm } from '../../components/Form';
import { ModalWindow } from '../../components/Modal';

const Container = styled.div`
    margin-top:25rem;
    text-align: center;
`
const Title = styled.h1`
    font-size: 15ch;
    font-weight: 700;
`
const Subtitle = styled.h4`
    font-size: 3ch;
    font-weight: 500;
    margin-bottom: 3rem;
`

export const Home = () => {
    const [show, setShow] = useState(false);
    let socket = async () => new WebSocket("http://localhost:3333");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <Title>Join the Braves!</Title>
            <Subtitle>The most popular messenger among the developers!</Subtitle>
            <Button size='lg' onClick={handleShow}>Start messaging</Button>
            <ModalWindow title='Sign in' handleClose={handleClose} state={show}>
                <SignForm/>
            </ModalWindow>
        </Container>
    );
}
