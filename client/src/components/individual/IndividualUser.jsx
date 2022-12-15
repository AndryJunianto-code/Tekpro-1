import React from "react";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { followUser, unfollowUser } from "../../request/userRequest";
const IndividualUser = ({ u, userSearchRefetch }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { username, description, userId, picture, followers } = u;
  const [isFollowing, setIsFollowing] = useState(null);

  const { mutate: mutateFollow } = useMutation(followUser, {
    onSuccess: (data) => {
      userSearchRefetch();
    },
  });

  const { mutate: mutateUnfollow } = useMutation(unfollowUser, {
    onSuccess: (data) => {
      userSearchRefetch();
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
      authorId: userId,
      authorUsername: username,
      authorPicture: picture,
    });
  };

  const handleUnfollowUser = () => {
    setIsFollowing(false);
    mutateUnfollow({
      userId: user?.sub,
      authorId: userId,
      authorUsername: username,
      authorPicture: picture,
    });
  };

  useEffect(() => {
    if (followers && followers.includes(user?.sub)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, []);
  return (
    <>
      {userId !== user?.sub && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to={`/profile/${userId}`} className="link">
              <Stack direction="row" alignItems="center">
                <Avatar
                  src={picture}
                  alt="image"
                  sx={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <Stack ml="1.5rem">
                  <Typography fontSize="0.9rem" fontWeight="600">
                    {username}
                  </Typography>
                  <Typography fontSize="0.75rem" color="#707070">
                    {description}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
            {isFollowing ? (
              <Button
                onClick={handleUnfollowUser}
                variant="outlined"
                sx={{ textTransform: "capitalize", fontSize: "0.8rem" }}
              >
                Following
              </Button>
            ) : (
              <Button
                onClick={handleFollowUser}
                variant="contained"
                sx={{ textTransform: "capitalize", fontSize: "0.8rem" }}
              >
                Follow
              </Button>
            )}
          </Stack>
          <Divider variant="fullWidth" sx={{ mt: "1.4rem", mb: "1.4rem" }} />
        </>
      )}
    </>
  );
};

export default IndividualUser;
