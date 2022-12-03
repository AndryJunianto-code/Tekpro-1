import { Avatar, Box, Button, Typography, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { followUser, unfollowUser } from "../request/userRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

export const FollowingBox = styled(Box)(({ theme }) => ({
  height: "150px",
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const PostRightbar = ({ userQuery, userQueryRefetch, profile }) => {
  const { user } = useAuth0();
  const theme = useTheme();
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
        p: 2,
      }}
      mt={profile ? "3rem" : ""}
    >
      {userQuery && (
        <Box position="fixed" pr={{ lg: 5, xl: 25 }}>
          <Avatar
            src={userQuery[0]?.picture}
            sx={{ width: "80px", height: "80px" }}
          />
          <Typography fontWeight={500} fontSize="0.8rem" mt={"0.5rem"}>
            {userQuery[0]?.username}
          </Typography>
          <Typography
            mt="0.2rem"
            fontSize="0.8rem"
            color={theme.palette.darkGrey}
          >
            {userQuery[0]?.followers.length} Followers
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
          {isFollowing ? (
            <Button
              onClick={handleUnfollowUser}
              variant="outlined"
              sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
            >
              Following
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
            >
              Follow
            </Button>
          )}

          {profile && userQuery && userQuery[0]?.followings.length > 0 && (
            <Box mt="3rem">
              <Typography mb="0.8rem" fontSize="0.8rem" fontWeight="600">
                Following
              </Typography>
              <FollowingBox>
                {userQuery &&
                  userQuery[0]?.followings.map((f) => (
                    <Link to={`/profile/${f.userId}`} className="link">
                      <Stack mb="0.7rem" direction="row" alignItems="center">
                        <Avatar
                          src={f.userPicture}
                          sx={{
                            width: "20px",
                            height: "20px",
                            marginRight: "0.4rem",
                          }}
                        />
                        <Typography fontSize="0.6rem">{f.username}</Typography>
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
