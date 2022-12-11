import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useColorModeContext } from "../context/ColorModeContext";

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
  width: "100%",
  fontSize: "0.95rem",
  padding: "0 1rem",
  color: "white",
  fontFamily: "David Libre",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
}));
const ColorModeTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontSize: "0.8rem",
  color: "white",
  fontFamily: "David Libre",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
}));
const UserModal = () => {
  const { user, logout } = useAuth0();
  const { toggleColorMode, colorMode } = useColorModeContext();
  return (
    <ModalBox>
      <Stack
        onClick={toggleColorMode}
        direction="row"
        alignItems="center"
        paddingX="0.6rem"
        mb="0.1rem"
      >
        <IconButton>
          {colorMode === "dark" ? (
            <LightModeOutlinedIcon sx={{ width: "20px", height: "20px" }} />
          ) : (
            <DarkModeOutlinedIcon
              sx={{
                width: "20px",
                height: "20px",
                color: "white",
              }}
            />
          )}
        </IconButton>
        <ColorModeTypography>
          {colorMode === "dark" ? "Light" : "Dark"}mode
        </ColorModeTypography>
      </Stack>
      <Divider variant="middle" color="#707070" />

      <Link className="link" to={`/profile/${user?.sub}`}>
        <CustomTypography mt="0.4rem" mb="0.4rem">
          Profile
        </CustomTypography>
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
