import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { fetchAllPostByLimit } from "../request/postRequest";
import { useQuery } from "react-query";
import { fetchUser } from "../request/userRequest";
import { useAuth0 } from "@auth0/auth0-react";
import IndividualFollowingPost from "./individual/IndividualFollowingPost";

const RightbarFollowingPostSection = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const [posts, setPosts] = useState([]);

  const { data: userData, isSuccess: userSuccess } = useQuery(
    ["fetchUser", user?.sub],
    fetchUser,
    { retryDelay: 3000 }
  );

  const { data: followingPostData, isSuccess: followingPostSuccess } = useQuery(
    ["fetchAllPostByLimit"],
    fetchAllPostByLimit,
    { retryDelay: 3000 }
  );

  useEffect(() => {
    if (followingPostSuccess && userSuccess) {
      setPosts([]);
      followingPostData &&
        userData &&
        followingPostData.map((f) => {
          if (userData[0]?.followingsId.includes(f.authorId)) {
            setPosts((prev) => [...prev, f]);
          }
        });
    }
  }, [followingPostSuccess, userSuccess]);

  //if only one of the cost og thelghtign spee
  return (
    <Box mt="2.5rem">
      <Typography
        color={theme.palette.mainWhite}
        variant="h6"
        fontSize={"0.9rem"}
        mb="0.6rem"
      >
        Recently Posted
      </Typography>
      <Box>
        {posts?.length > 0 ? (
          posts.map((p) => <IndividualFollowingPost post={p} key={p._id} />)
        ) : (
          <Typography fontSize="0.8rem" color="gray">
            Follow your favourite writers to see their post here !
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RightbarFollowingPostSection;
