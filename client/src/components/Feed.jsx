import { Stack } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualCardPost from "./individual/IndividualCardPost";

const Feed = () => {
  return (
    <CustomBox flex={4} pt={2}>
      <BoxWrapper>
        <Stack>
          <IndividualCardPost />
          <IndividualCardPost />
          <IndividualCardPost />
          <IndividualCardPost />
          <IndividualCardPost />
        </Stack>
      </BoxWrapper>
    </CustomBox>
  );
};

export default Feed;
