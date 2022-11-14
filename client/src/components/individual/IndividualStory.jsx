import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { theme } from "../../theme";

const IndividualStory = () => {
  return (
    <>
      <Box>
        <Typography variant="body2" fontWeight={700} mb={"0.2rem"}>
          How to code
        </Typography>
        <Typography
          className="storyDesc"
          variant="caption"
          color={theme.palette.darkGrey}
          fontWeight={400}
          marginBottom={"0.8rem"}
          lineHeight={"17px"}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          optio rerum ducimus rem esse? Aliquam natus eos accusantium sapiente
          ratione eum error! Maiores, ipsa placeat. Iste,
        </Typography>
        <Typography fontSize={"0.7rem"} color={theme.palette.darkGrey}>
          Published on Oct 23
        </Typography>
      </Box>
      <Divider variant="fullWidth" sx={{ my: "1.2rem" }} />
    </>
  );
};

export default IndividualStory;
