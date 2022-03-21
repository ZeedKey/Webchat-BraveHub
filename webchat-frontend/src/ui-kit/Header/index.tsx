import { Button, Stack, Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Stack direction="row" sx={{justifyContent: 'space-between'}}>
      <Typography variant="subtitle2">BraveHub</Typography>

      <Stack direction="row" spacing={2}>
        <Button size="small">Sign In</Button>
        <Button size="small">Sign Up</Button>
      </Stack>
    </Stack>
  );
};
