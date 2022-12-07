import { Box, Stack } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import SearchContent from "../components/SearchContent";
import useDocumentTitle from "../hook/useDocumentTitle";

const YourStories = () => {
  useDocumentTitle("CodingInk");
  return (
    <Box minHeight="100vh" height="100%">
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <SearchContent />
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
