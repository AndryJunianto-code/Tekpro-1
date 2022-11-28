import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileTable from "./ProfileTable";

const PostRightbar = () => {
  const { user } = useAuth0();
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
        p: 2,
      }}
      mt="3rem"
    >
      <Box position="fixed" pr={{ lg: 5, xl: 25 }}>
        <Avatar
          src={
            user?.picture ||
            "https://images.pexels.com/photos/14185268/pexels-photo-14185268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          sx={{ width: "80px", height: "80px" }}
        />
        <Typography
          fontWeight={300}
          fontSize="1rem"
          mt={"0.5rem"}
          mb="1.3rem"
          letterSpacing="6px"
        >
          Andry Junianto
        </Typography>
        <Stack direction="row">
          <Typography fontSize="0.9rem" letterSpacing="1px" mr="1rem">
            <b>0</b> posts
          </Typography>
          <Typography fontSize="0.9rem" letterSpacing="1px" mr="1rem">
            <b>123</b> followers
          </Typography>
          <Typography fontSize="0.9rem" letterSpacing="1px">
            <b>321</b> following
          </Typography>
        </Stack>
        <ProfileTable />
      </Box>
    </Box>
  );
};

export default PostRightbar;
