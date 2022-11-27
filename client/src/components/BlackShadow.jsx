import React from "react";
import { Box, styled } from "@mui/material";

const BlackShadow = ({ setIsOpenCommentModal }) => {
  const BlackShadowBox = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 1000,
    position: "absolute",
    top: "0",
    left: "0",
  }));
  return (
    <BlackShadowBox
      onClick={() => setIsOpenCommentModal(false)}
    ></BlackShadowBox>
  );
};

export default BlackShadow;
