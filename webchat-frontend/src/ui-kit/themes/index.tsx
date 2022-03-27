import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: '800'
    },
    h2: {
      fontSize: 34,
      fontWeight: '400'
    },
    h6: {
      fontSize: 16,
      fontWeight: '300'
    },
    h5: {
      fontSize: 14,
      fontWeight: '400'
    },
    subtitle1: {
      fontSize: 26,
    },
    subtitle2: {
      fontSize: 18,
    },
    body1: {
      fontSize: 13,
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
  },
});
