import React from "react";
import { Box, styled } from "@mui/material";

const TransparentShadow = () => {
  const TransparentShadowBox = styled(Box)(({ theme }) => ({
    width: "98vw",
    height: "100vh",
    position: "absolute",
    left: "0",
  }));
  return <TransparentShadowBox></TransparentShadowBox>;
};

export default TransparentShadow;
