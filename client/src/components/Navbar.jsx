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
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/LogoutButton";

const Navbar = () => {
  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.mainBlue,
    position: "sticky",
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
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    marginLeft: "2rem",
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  return (
    <StyledNavbar>
      <Toolbar>
        <Typography variant="h6">
          <LogoutButton />{" "}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputBase placeholder="Search..." sx={{ paddingLeft: "1.5rem" }} />
        </Search>
      </Toolbar>

      {user ? (
        <Stack direction="row" mr={"2rem"}>
          <IconButton
            sx={{
              width: "2rem",
              height: "2rem",
              mr: "0.5rem",
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ color: "#fafafa" }} />
          </IconButton>
          <Avatar alt={user?.name} src={user?.picture} />
        </Stack>
      ) : (
        <Box>
          <Button variant="text" onClick={() => loginWithRedirect()}>
            <Typography
              mr={0.5}
              color="white"
              fontSize={{ xs: "0.7rem", md: "1rem" }}
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
    </StyledNavbar>
  );
};

export default Navbar;
