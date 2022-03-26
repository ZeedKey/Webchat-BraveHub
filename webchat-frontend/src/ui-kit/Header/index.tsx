import { Button, Stack, Typography } from "@mui/material";
import { useModal, useSession } from "../hooks";

export const Header: React.FC = () => {
  const { openSignUp } = useModal('signup');
  const { openSignIn } = useModal('signin');
  const { logout, stateSession } = useSession();

  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', p: '2rem' }}>
      <Typography variant="subtitle2">BraveHub</Typography>
      <Stack direction="row" spacing={2}>
        {stateSession ?
          <>
            <Button size="small" onClick={logout}>Logout</Button>
          </>
          :
          <>
            <Button size="small" onClick={openSignIn}>Sign In</Button>
            <Button size="small" onClick={openSignUp} variant="contained">Sign Up</Button>
          </>
        }
      </Stack>
    </Stack>
  );
};
