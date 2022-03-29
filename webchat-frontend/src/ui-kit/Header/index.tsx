import { Box, Button, Stack, Switch, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useModal, useSession } from "../hooks";

export const Header: React.FC = () => {
  const { openSignUp } = useModal('signup');
  const { openSignIn } = useModal('signin');
  const { logout, stateSession } = useSession();

  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', p: '2rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to='/'>
          <Typography variant="subtitle2" component='span' sx={{ mr: 0.5 }}>BraveHub</Typography>
        </Link>
        <Switch defaultChecked color="default" />
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
