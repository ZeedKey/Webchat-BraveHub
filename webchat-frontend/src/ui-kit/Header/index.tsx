import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { setIsLogged, setModalClose, setSignInModalOpen, setSignUpModalOpen } from "../../store/session";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state: RootState) => state.sessionReducer.isLogged);
  const handleOpenSignUp = () => dispatch(setSignUpModalOpen());
  const handleOpenSignIn = () => dispatch(setSignInModalOpen());
  const handleLogout = () => {
    dispatch(setIsLogged(false))
    navigate('/')
  }

  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', p: '2rem' }}>
      <Typography variant="subtitle2">BraveHub</Typography>

      <Stack direction="row" spacing={2}>

        {isLogged ?
          <>
            <Button size="small" onClick={handleLogout}>Logout</Button>
          </>
          :
          <>
            <Button size="small" onClick={handleOpenSignIn}>Sign In</Button>
            <Button size="small" onClick={handleOpenSignUp} variant="contained">Sign Up</Button>
          </>
        }
      </Stack>
    </Stack>
  );
};
