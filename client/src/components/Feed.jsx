import { Stack } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualCardPost from "./individual/IndividualCardPost";
import { useQuery } from "react-query";
import { fetchAllPost } from "../request/postRequest";
import { useEffect } from "react";

const Feed = () => {
  const { data: feedData, isSuccess: feedSuccess } = useQuery(
    ["fetchAllPost"],
    fetchAllPost,
    { retryDelay: 3000 }
  );

  return (
    <CustomBox flex={4} pt={2}>
      <BoxWrapper>
        <Stack>
          {feedSuccess &&
            feedData?.map((post) => (
              <IndividualCardPost post={post} key={post._id} />
            ))}
        </Stack>
      </BoxWrapper>
    </CustomBox>
  );
};

export default Feed;
