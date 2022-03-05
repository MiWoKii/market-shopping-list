import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

const newTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "roboto",
    body1: {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
  },
});

export default newTheme;
