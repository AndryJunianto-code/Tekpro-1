import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualStory from "./individual/IndividualStory";
import { useQuery } from "react-query";
import { fetchPostByAuthor } from "../request/postRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { fetchUser } from "../request/userRequest";

const Stories = () => {
  const { user } = useAuth0();
  const { data: storyData, isSuccess: storySuccess } = useQuery(
    ["fetchPostByAuthor", user?.sub],
    fetchPostByAuthor,
    {
      retryDelay: 3000,
    }
  );
  const {
    data: userData,
    isSuccess: userSuccess,
    refetch: userRefetch,
  } = useQuery(["fetchUser", user?.sub], fetchUser, { retryDelay: 3000 });

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            Your Stories
          </Typography>
          <Link to="/write" className="link">
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                textTransform: "capitalize",
                marginBottom: "2rem",
              }}
            >
              Write a story
            </Button>
          </Link>
        </Stack>
        <Typography variant="caption" fontWeight={300}>
          Published {storyData?.length}
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "2rem", marginTop: "0.5rem" }}
        />
        {storySuccess &&
          userSuccess &&
          storyData?.map((story) => (
            <IndividualStory
              story={story}
              key={story._id}
              userData={userData}
            />
          ))}
      </BoxWrapper>
    </CustomBox>
  );
};

export default Stories;
