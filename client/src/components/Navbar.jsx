import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  alpha,
  Button,
  Box,
  Avatar,
  Stack,
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import UserModal from "../modal/UserModal";
import { useState } from "react";
import TransparentShadow from "./TransparentShadow";
import SearchBar from "./SearchBar";
import { useColorModeContext } from "../context/ColorModeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode } = useColorModeContext();
  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: colorMode === "light" ? "026aa7" : "#222222",
    position: "sticky",
  }));
  const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 0.45),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    marginLeft: "2rem",
    height: "100%",
  }));

  const OutlinedButton = styled(Button)(({ theme }) => ({
    marginRight: "2rem",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const { loginWithRedirect, user } = useAuth0();
  const [openUserModal, setOpenUserModal] = useState(false);

  const handleUserModal = () => {
    setOpenUserModal(!openUserModal);
  };
  return (
    <StyledNavbar onClick={() => setOpenUserModal(!openUserModal)}>
      {openUserModal && <TransparentShadow />}
      <CustomToolbar onClick={(e) => e.stopPropagation()}>
        <Stack direction="row">
          <Link className="linkWhite" to="/">
            <Stack direction="row">
              <Avatar
                src="https://res.cloudinary.com/de1r7z9bw/image/upload/v1670521416/Post%20Image/dlmrkypk8wuqnimmks7v.png"
                alt="logo"
              />
              <Typography
                variant="h6"
                ml="0.3rem"
                display={{ xs: "none", md: "block" }}
              >
                CodingInk
              </Typography>
            </Stack>
          </Link>
          <Search>
            <SearchBar />
          </Search>
        </Stack>
        {user ? (
          <Stack
            direction="row"
            sx={{
              marginRight: {
                xs: "",
                lg: "2rem",
              },
            }}
          >
            <Avatar
              alt={user?.name}
              src={user.picture}
              onClick={handleUserModal}
            />
            {openUserModal && <UserModal />}
          </Stack>
        ) : (
          <Box>
            <Button variant="text" onClick={() => loginWithRedirect()}>
              <Typography
                mr={0.5}
                color="white"
                fontSize={{ xs: "0.6rem", md: "1rem" }}
              >
                Log in
              </Typography>
            </Button>
            <OutlinedButton
              variant="outlined"
              onClick={() => loginWithRedirect({ screen_hint: "signup" })}
            >
              <Typography color="white">Sign up</Typography>
            </OutlinedButton>
          </Box>
        )}
      </CustomToolbar>
    </StyledNavbar>
  );
};

export default Navbar;
