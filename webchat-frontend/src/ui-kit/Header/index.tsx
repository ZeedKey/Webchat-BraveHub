import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useModal, useSession } from "../hooks";

export const Header: React.FC = () => {
  const { openSignUp } = useModal('signup');
  const { openSignIn } = useModal('signin');
  const navigate = useNavigate();
  const { logout, stateSession } = useSession();
  const handleToHome = () => navigate('/')
  const handleToChat = () => navigate('/chat')

  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', p: '2rem' }}>
      <Box onClick={handleToHome} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="subtitle2" component='span' sx={{ mr: 0.5 }}>BraveHub</Typography>
        <Switch defaultChecked color="default" />
        {stateSession && <Button size="small" onClick={handleToChat} sx={{ color: 'white' }}>Chat</Button>}
      </Box>
      <Stack direction="row" spacing={2}>
        {stateSession ?
          <>
            <Button size="small" onClick={logout} sx={{ color: 'white' }}>Logout</Button>
          </>
          :
          <>
            <Button size="small" onClick={openSignIn} variant="contained">Sign In</Button>
            <Button size="small" onClick={openSignUp} variant="contained">Sign Up</Button>
          </>
        }
      </Stack>
    </Stack>
  );
};
