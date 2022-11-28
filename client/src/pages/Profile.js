import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import UserProfile from "../components/UserProfile";
import OtherProfile from "../components/OtherProfile";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import OtherProfileRightbar from "../components/OtherProfileRightbar";
import PostRightbar from "../components/PostRightbar";
import { fetchUser } from "../request/userRequest";
import { useQuery } from "react-query";

const Profile = () => {
  const { user } = useAuth0();
  const { userId } = useParams();
  const { data: userQuery } = useQuery(["fetchUser", userId], fetchUser, {
    retryDelay: 3000,
  });
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        {user?.sub === userId ? (
          <>
            <UserProfile />
            <Box
              flex={2}
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            />
          </>
        ) : (
          <>
            <OtherProfile userQuery={userQuery} />
            <PostRightbar userQuery={userQuery} profile={true} />
          </>
        )}
      </Stack>
      <BottomBar />
    </>
  );
};

export default Profile;
