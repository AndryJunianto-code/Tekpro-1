import { Stack } from "@mui/system";
import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import UserProfile from "../components/UserProfile";
import OtherProfile from "../components/OtherProfile";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import OtherProfileRightbar from "../components/OtherProfileRightbar";
import PostRightbar from "../components/PostRightbar";
import { fetchUser, followUser, unfollowUser } from "../request/userRequest";
import { useQuery, useMutation } from "react-query";
import useDocumentTitle from "../hook/useDocumentTitle";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { userId } = useParams();
  const [isFollowing, setIsFollowing] = useState(null);
  const { data: userQuery, refetch: userQueryRefetch } = useQuery(
    ["fetchUser", userId],
    fetchUser,
    {
      retryDelay: 3000,
    }
  );
  useDocumentTitle(userQuery && userQuery[0]?.username);
  const { mutate: mutateFollow } = useMutation(followUser, {
    onSuccess: (data) => {
      userQueryRefetch();
    },
  });
  const { mutate: mutateUnfollow } = useMutation(unfollowUser, {
    onSuccess: (data) => {
      userQueryRefetch();
    },
  });
  const handleFollowUser = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    setIsFollowing(true);
    mutateFollow({
      userId: user?.sub,
      authorId: userQuery[0]?.userId,
      authorUsername: userQuery[0]?.username,
      authorPicture: userQuery[0]?.picture,
    });
  };
  const handleUnfollowUser = () => {
    setIsFollowing(false);
    mutateUnfollow({
      userId: user?.sub,
      authorId: userQuery[0]?.userId,
      authorUsername: userQuery[0]?.username,
      authorPicture: userQuery[0]?.picture,
    });
  };
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
            {userQuery && (
              <OtherProfile
                userQuery={userQuery}
                handleFollowUser={handleFollowUser}
                handleUnfollowUser={handleUnfollowUser}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
              />
            )}
            {userQuery && (
              <PostRightbar
                userQuery={userQuery}
                profile={true}
                handleFollowUser={handleFollowUser}
                handleUnfollowUser={handleUnfollowUser}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
              />
            )}
          </>
        )}
      </Stack>
      <BottomBar />
    </>
  );
};

export default Profile;
