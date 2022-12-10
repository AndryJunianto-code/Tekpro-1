import { Avatar, Box, Button, Typography, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { followUser, unfollowUser } from "../request/userRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useColorModeContext } from "../context/ColorModeContext";

export const FollowingBox = styled(Box)(({ theme }) => ({
  height: "150px",
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const PostRightbar = ({ userQuery, userQueryRefetch, profile }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const { colorMode } = useColorModeContext();
  const [isFollowing, setIsFollowing] = useState(null);

  const { mutate: mutateFollow } = useMutation(followUser, {
    onSuccess: (data) => {
      console.log(data);
      userQueryRefetch();
    },
  });

  const { mutate: mutateUnfollow } = useMutation(unfollowUser, {
    onSuccess: (data) => {
      console.log(data);
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

  useEffect(() => {
    if (userQuery) {
      if (userQuery[0]?.followers.includes(user?.sub)) {
        setIsFollowing(true);
      } else {
        setIsFollowing(false);
      }
    }
  }, [userQuery]);
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
        pl: "1rem",
        borderLeft:
          colorMode === "light" ? "1px solid #e3e3e3" : "1px solid #292929",
        paddingTop: "5rem",
      }}
    >
      {userQuery && (
        <Box
          position="fixed"
          pr={{ lg: 5, xl: 25 }}
          color={theme.palette.mainWhite}
        >
          <Avatar
            src={userQuery[0]?.picture}
            sx={{ width: "80px", height: "80px" }}
          />
          <Typography fontWeight={500} mt={"0.5rem"}>
            {userQuery[0]?.username}
          </Typography>
          <Typography mt="0.2rem" color={theme.palette.darkGrey}>
            {userQuery[0]?.followers.length} Followers
          </Typography>
          <Typography
            mt="0.4rem"
            mb="0.8rem"
            fontSize="0.9rem"
            color={theme.palette.darkGrey}
            fontWeight={400}
          >
            {userQuery && userQuery[0]?.description}
          </Typography>
          {userQuery[0]?.userId === user?.sub && (
            <Link className="link" to={`/profile/${user?.sub}`}>
              <Button
                variant="text"
                sx={{ textTransform: "capitalize", padding: "0px" }}
              >
                Edit Profile
              </Button>
            </Link>
          )}

          {isFollowing && userQuery[0]?.userId !== user?.sub && (
            <Button
              onClick={handleUnfollowUser}
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
            >
              Following
            </Button>
          )}

          {!isFollowing && userQuery[0]?.userId !== user?.sub && (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
              Follow
            </Button>
          )}

          {profile && userQuery && userQuery[0]?.followings.length > 0 && (
            <Box mt="3rem">
              <Typography mb="0.8rem" fontWeight="600">
                Following
              </Typography>
              <FollowingBox>
                {userQuery &&
                  userQuery[0]?.followings.map((f) => (
                    <Link
                      to={`/profile/${f.userId}`}
                      className="link"
                      key={f.userId}
                    >
                      <Stack mb="0.7rem" direction="row" alignItems="center">
                        <Avatar
                          src={f.userPicture}
                          sx={{
                            width: "20px",
                            height: "20px",
                            marginRight: "0.8rem",
                          }}
                        />
                        <Typography
                          color={theme.palette.mainWhite}
                          fontSize="0.9rem"
                        >
                          {f.username}
                        </Typography>
                      </Stack>
                    </Link>
                  ))}
              </FollowingBox>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PostRightbar;
