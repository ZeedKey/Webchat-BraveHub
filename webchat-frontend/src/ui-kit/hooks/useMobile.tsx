import { Theme, useMediaQuery } from '@mui/material';

const useMobile = () => useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

export default useMobile;
