import { Button, Grid, Typography } from "@mui/material";
import { MainLayout, SignIn, SignUp, useModal } from "../../ui-kit";

export const Home = () => {
  const { openSignUp, stateSignUp } = useModal('signup');
  const { stateSignIn } = useModal('signin');

  return (
    <MainLayout>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}>
        <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
          BraveHub is a free messenger for developers
        </Typography>
        <Button onClick={openSignUp} size="medium" variant="contained" sx={{ textAlign: "center", mt: 5 }}>
          Start messaging
        </Button>
        <SignUp open={stateSignUp} />
        <SignIn open={stateSignIn} />
      </Grid>
    </MainLayout>
  );
};
