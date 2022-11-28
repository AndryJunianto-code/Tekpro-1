import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1c2d38",
  zIndex: 1100,
  position: "absolute",
  top: "60px",
  right: "40px",
  width: "130px",
  maxWidth: "90vw",
  paddingTop: "0.8rem",
  paddingBottom: "0.6rem",
  overflowY: "auto",
  borderRadius: "7px",
  overflow: "hidden",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  width: "100%",
  marginBottom: "0.2rem",
  padding: "0 1rem",
  color: "white",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
}));
const UserModal = () => {
  return (
    <ModalBox>
      <Link className="link" to="/profile/123">
        <CustomTypography>Profile</CustomTypography>
      </Link>
      <CustomTypography>Sign out</CustomTypography>
    </ModalBox>
  );
};

export default UserModal;