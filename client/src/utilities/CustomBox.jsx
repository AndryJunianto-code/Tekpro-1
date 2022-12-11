import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
  width: "90%",
  minHeight: "100vh",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    width: "75%",
    maxWidth: "700px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));
