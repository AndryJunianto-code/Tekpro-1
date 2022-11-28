import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const PostRightbar = ({ userQuery, profile }) => {
  const theme = useTheme();
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
        p: 2,
      }}
      mt={profile ? "3rem" : ""}
    >
      <Box position="fixed" pr={{ lg: 5, xl: 25 }}>
        <Avatar
          src={
            "https://images.pexels.com/photos/14185268/pexels-photo-14185268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          sx={{ width: "80px", height: "80px" }}
        />
        <Typography fontWeight={500} fontSize="0.8rem" mt={"0.5rem"}>
          {userQuery && userQuery[0].username}
        </Typography>
        <Typography
          mt="0.2rem"
          fontSize="0.8rem"
          color={theme.palette.darkGrey}
        >
          {userQuery && userQuery[0]?.followers.length} Followers
        </Typography>
        <Typography
          mt="0.4rem"
          mb="0.8rem"
          fontSize="0.65rem"
          color={theme.palette.darkGrey}
          fontWeight={400}
        >
          {userQuery && userQuery[0]?.description}
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
        >
          Follow
        </Button>
      </Box>
    </Box>
  );
};

export default PostRightbar;
