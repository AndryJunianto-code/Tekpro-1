import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    mainBlue: "#026aa7",
    mainWhite: "#f9fbfd",
    darkGrey: "#707070",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
