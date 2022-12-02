import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1c2d38",
  zIndex: 1100,
  position: "absolute",
  top: "60px",
  right: "20px",
  width: "130px",
  maxWidth: "90vw",
  paddingTop: "0.8rem",
  paddingBottom: "0.6rem",
  overflowY: "auto",
  borderRadius: "7px",
  overflowX: "hidden",
  [theme.breakpoints.up("lg")]: {
    right: "70px",
  },
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
  const { user, logout } = useAuth0();
  return (
    <ModalBox>
      <Link className="link" to={`/profile/${user?.sub}`}>
        <CustomTypography>Profile</CustomTypography>
      </Link>
      <CustomTypography
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Sign out
      </CustomTypography>
    </ModalBox>
  );
};

export default UserModal;
