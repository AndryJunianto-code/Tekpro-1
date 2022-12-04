import { Typography, Stack, useTheme } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import { fetchOneList } from "../request/bookmarkListRequest";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import IndividualCardPost from "./individual/IndividualCardPost";

const YourListPosts = () => {
  const { bookmarkId, name } = useParams();
  const theme = useTheme();
  const { data: listsData, isSuccess: listsSuccess } = useQuery(
    ["fetchOneList", bookmarkId],
    fetchOneList,
    {
      retryDelay: 3000,
    }
  );

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper
        minHeight="100vh"
        height="100%"
        color={theme.palette.mainWhite}
      >
        <Typography fontWeight={900} fontSize={"1.8rem"}>
          {name}
        </Typography>
        <Typography variant="caption">
          {listsData?.posts.length} stories
        </Typography>
        <Stack mt={"1rem"}>
          {listsSuccess &&
            listsData?.posts.map((post) => (
              <IndividualCardPost post={post} key={post._id} />
            ))}
        </Stack>
      </BoxWrapper>
    </CustomBox>
  );
};

export default YourListPosts;
