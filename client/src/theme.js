import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mainBlue: "#026aa7",
    mainWhite: "#f9fbfd",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
