import {
  Typography,
  Stack,
  Divider,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualList from "./individual/IndividualList";
import NewListModal from "../modal/NewListModal";
import { fetchAllLists, fetchOneList } from "../request/bookmarkListRequest";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import IndividualCardPost from "./individual/IndividualCardPost";

const YourListPosts = () => {
  const { bookmarkId, name } = useParams();
  const { data: listsData, isSuccess: listsSuccess } = useQuery(
    ["fetchOneList", bookmarkId],
    fetchOneList,
    {
      retryDelay: 3000,
    }
  );
  useEffect(() => {
    console.log(listsData);
  }, [listsSuccess]);
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
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
