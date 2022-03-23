import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { MainLayout, SignUp, SignIn } from "../../ui-kit";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setSignInModalOpen, setSignUpModalOpen } from "../../store/session";

export const Home = () => {
  const isSignUpOpen = useSelector((state: RootState) => state.sessionReducer.isSignUpModalOpen);
  const isSignInOpen = useSelector((state: RootState) => state.sessionReducer.isSignInModalOpen);
  const dispatch = useDispatch()
  const handleSignUpOpen = () => dispatch(setSignUpModalOpen())
  return (
    <MainLayout>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: "15%",
        justifyContent: 'center',
      }}>
        <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
          BraveHub is a free messenger for developers
        </Typography>
        <Button onClick={handleSignUpOpen} size="medium" variant="contained" sx={{ textAlign: "center", mt: 5 }}>
          Start messaging
        </Button>
        <SignUp open={isSignUpOpen} />
        <SignIn open={isSignInOpen} />
      </Grid>
    </MainLayout>
  );
};
