import { Box, Stack } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import TagContent from "../components/TagContent";

const YourStories = () => {
  return (
    <Box height="100%" minHeight="100vh">
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <TagContent />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
      <BottomBar />
    </Box>
  );
};

export default YourStories;
