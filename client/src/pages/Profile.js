import { Stack } from "@mui/system";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import UserProfile from "../components/UserProfile";
import ProfileRightbar from "../components/ProfileRightbar";
import { Box } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <UserProfile />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
      <BottomBar />
    </>
  );
};

export default Profile;
