import { Stack } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualPost from "./individual/IndividualPost";

const Feed = () => {
  return (
    <CustomBox flex={4} pt={2}>
      <BoxWrapper>
        <Stack>
          <IndividualPost />
          <IndividualPost />
          <IndividualPost />
          <IndividualPost />
          <IndividualPost />
        </Stack>
      </BoxWrapper>
    </CustomBox>
  );
};

export default Feed;
