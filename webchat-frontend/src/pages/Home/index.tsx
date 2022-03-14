import React, { useState } from 'react';
import { Button, colors, Grid, Typography as Text } from '@mui/material'
import styled from 'styled-components'
import { RegForm } from '../../components/Containers/RegForm';
import { ModalWindow } from '../../components/Containers/Modal';

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 5rem;
    margin-top: 25rem;
`
export const Home = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const setOpen = () => setModalOpen(true);
  const setClose = () => setModalOpen(false);

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Text mb={3} fontWeight={900} variant="h1">Join the Braves</Text>
          <Text fontWeight={600} variant="h4">BraveHub is the most popular messeneger among the developers</Text>
          <Text mb={6} fontWeight={600} variant="h4">And now it's for free</Text>
          <Button size={'large'} variant="contained" onClick={setOpen}>Start messaging</Button>
        </Grid>
      </Grid>

      <ModalWindow isModalOpen={isModalOpen} closeHandler={setClose}>
        <RegForm />
      </ModalWindow>
    </Container>
  );
}
