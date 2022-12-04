import { Box } from "@mui/material";
import React from "react";
import RightbarTopicSection from "./RightbarTopicSection";
import RightbarWriterSection from "./RightbarWriterSection";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
      }}
      p={2}
    >
      <Box position="fixed">
        <RightbarTopicSection />
        <RightbarWriterSection />
      </Box>
    </Box>
  );
};

export default Rightbar;
