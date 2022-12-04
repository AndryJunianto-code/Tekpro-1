import React from "react";
import topWriter from "../data/TopWriter";
import { Typography, Box } from "@mui/material";
import IndividualTopWriter from "./individual/IndividualTopWriter";

const RightbarWriterSection = () => {
  return (
    <Box mt="2.5rem">
      <Typography variant="h6" fontSize={"0.8rem"} mb="0.6rem">
        Top Writers
      </Typography>
      {topWriter.map((t) => (
        <IndividualTopWriter t={t} key={t.userId} />
      ))}
    </Box>
  );
};

export default RightbarWriterSection;
