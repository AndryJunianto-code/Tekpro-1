import {
  Typography,
  Stack,
  Divider,
  useTheme,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { fetchPostByAuthor } from "../request/postRequest";
import IndividualCardPost from "./individual/IndividualCardPost";

const OtherProfile = ({
  userQuery,
  handleFollowUser,
  handleUnfollowUser,
  isFollowing,
  setIsFollowing,
  user,
}) => {
  const { userId } = useParams();
  const theme = useTheme();
  const { data: postsData, isSuccess: postsDataSuccess } = useQuery(
    ["fetchPostByAuthor", userId],
    fetchPostByAuthor,
    { retryDelay: 3000 }
  );
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"} pb="3rem">
      <BoxWrapper
        minHeight="100vh"
        height="100%"
        color={theme.palette.mainWhite}
      >
        <Stack direction="row" alignItems={"center"} mb="1rem">
          <Avatar
            src={userQuery && userQuery[0].picture}
            sx={{
              width: "50px",
              height: "50px",
              display: { xs: "block", lg: "none" },
            }}
          />
          <Stack ml={{ xs: "1.4rem", lg: "0" }}>
            <Typography fontSize={"1.8rem"} fontWeight={900}>
              {userQuery && userQuery[0]?.username}
            </Typography>
            <Typography
              color={theme.palette.darkGrey}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              {userQuery && userQuery[0]?.followers.length} Followers
            </Typography>
          </Stack>
        </Stack>
        {isFollowing && userQuery[0]?.userId !== user?.sub && (
          <Button
            onClick={handleUnfollowUser}
            variant="outlined"
            size="small"
            sx={{
              textTransform: "capitalize",
              display: { xs: "block", lg: "none" },
              width: "100%",
            }}
          >
            Following
          </Button>
        )}

        {!isFollowing && userQuery[0]?.userId !== user?.sub && (
          <Button
            onClick={handleFollowUser}
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              display: { xs: "block", lg: "none" },
              width: "100%",
            }}
          >
            Follow
          </Button>
        )}
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "3rem", mt: "1.4rem" }}
        />
        {postsDataSuccess &&
          (postsData?.length > 0 ? (
            postsData.map((p) => <IndividualCardPost key={p._id} post={p} />)
          ) : (
            <p>No Stories</p>
          ))}
      </BoxWrapper>
    </CustomBox>
  );
};

export default OtherProfile;
