import React from "react";
import { Box, styled } from "@mui/material";

const TransparentShadow = () => {
  const TransparentShadowBox = styled(Box)(({ theme }) => ({
    width: "99vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0)",
    zIndex: 1000,
    position: "absolute",
    top: "0",
    left: "0",
    overflowX: "hidden",
  }));
  return <TransparentShadowBox></TransparentShadowBox>;
};

export default TransparentShadow;
