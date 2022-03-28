import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { MainLayout, SignIn, SignUp, useModal } from "../../ui-kit";

export const Home = () => {
  const { openSignUp, stateSignUp } = useModal('signup');
  const { stateSignIn } = useModal('signin');
  const isSignUpOpen: boolean = stateSignUp === undefined ? false : stateSignUp;
  const isSignInOpen: boolean = stateSignIn === undefined ? false : stateSignIn;

  return (
    <div className="Home">
      <MainLayout>
        <Grid sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
            BraveHub is a free messenger for developers
          </Typography>
          <Button onClick={openSignUp} size="medium" variant="contained" sx={{ textAlign: "center", mt: 5 }}>
            Start messaging
          </Button>
          <SignUp isOpen={isSignUpOpen} />
          <SignIn isOpen={isSignInOpen} />
        </Grid>
      </MainLayout>
    </div>

  );
};
