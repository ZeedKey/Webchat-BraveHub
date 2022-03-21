import { createTheme } from "@mui/material/styles";
import { blue, common, green, purple } from "@mui/material/colors";

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
    subtitle1: {
      fontSize: 26,
    },
    subtitle2: {
      fontSize: 24,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontStyle: 'Roboto',
    },
  },
});
