import {
  Typography,
  Stack,
  Divider,
  Button,
  Avatar,
  InputBase,
  Box,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { fetchPostByAuthor } from "../request/postRequest";
import IndividualCardPost from "./individual/IndividualCardPost";

const OtherProfile = ({ userQuery }) => {
  const { userId } = useParams();

  const { data: postsData, isSuccess: postsDataSuccess } = useQuery(
    ["fetchPostByAuthor", userId],
    fetchPostByAuthor,
    { retryDelay: 3000 }
  );
  useEffect(() => {
    console.log(postsData);
  }, [postsData]);
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"} pb="3rem">
      <BoxWrapper>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            {userQuery && userQuery[0]?.username}
          </Typography>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "3rem", mt: "1.4rem" }}
        />
        {postsDataSuccess &&
          postsData.map((post) => <IndividualCardPost post={post} />)}
      </BoxWrapper>
    </CustomBox>
  );
};

export default OtherProfile;
