import { createStyles, keyframes, makeStyles } from '@mui/material';
import { blue, common } from '@mui/material/colors';
import GlobalStyles from '@mui/material/GlobalStyles';

export const changeColorAnimation = keyframes`
    0% {
        background: black;
    }
    100% {
        background: white;
    }
`