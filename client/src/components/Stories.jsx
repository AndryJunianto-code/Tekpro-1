import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualStory from "./individual/IndividualStory";

const Stories = () => {
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            Your Stories
          </Typography>
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
        </Stack>
        <Typography variant="caption" fontWeight={300}>
          Published 3
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "2rem", marginTop: "0.5rem" }}
        />
        <IndividualStory />
        <IndividualStory />
        <IndividualStory />
        <IndividualStory />
        <IndividualStory />
        <IndividualStory />
        <IndividualStory />
      </BoxWrapper>
    </CustomBox>
  );
};

export default Stories;
