import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../store";
import { setModalClose, setSignInModalOpen, setSignUpModalOpen } from "../../store/session";

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleOpenSignUp = () => dispatch(setSignUpModalOpen());
  const handleOpenSignIn = () => dispatch(setSignInModalOpen());

  return (
    <Stack direction="row" sx={{justifyContent: 'space-between', p:'2rem'}}>
      <Typography variant="subtitle2">BraveHub</Typography>

      <Stack direction="row" spacing={2}>
        <Button size="small" onClick={handleOpenSignIn}>Sign In</Button>
        <Button size="small" onClick={handleOpenSignUp}variant="contained">Sign Up</Button>
      </Stack>
    </Stack>
  );
};
