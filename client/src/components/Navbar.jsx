import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  alpha,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
    width: "30%",
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const OutlinedButton = styled(Button)(({ theme }) => ({
    border: "1px solid white",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  return (
    <StyledNavbar>
      <Toolbar>
        <Typography variant="h6">LOGO</Typography>
      </Toolbar>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <InputBase placeholder="Search..." sx={{ paddingLeft: "1.5rem" }} />
      </Search>

      <Box marginRight={2}>
        <Button variant="text">
          <Typography mr={0.5} color="white">
            Log in
          </Typography>
        </Button>
        <OutlinedButton variant="outlined">
          <Typography color="white">Sign up</Typography>
        </OutlinedButton>
      </Box>
    </StyledNavbar>
  );
};

export default Navbar;
