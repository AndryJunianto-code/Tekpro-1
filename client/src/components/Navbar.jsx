import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  alpha,
  Button,
  Box,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/LogoutButton";
import UserModal from "../modal/UserModal";
import { useState } from "react";
import TransparentShadow from "./TransparentShadow";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mainBlue,
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
    <StyledNavbar onClick={() => setOpenUserModal(false)}>
      {openUserModal && <TransparentShadow />}
      <CustomToolbar onClick={(e) => e.stopPropagation()}>
        <Stack direction="row">
          <Typography variant="h6">CodingInk</Typography>
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
