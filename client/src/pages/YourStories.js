import { Box, Stack } from "@mui/material";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import useDocumentTitle from "../hook/useDocumentTitle";

const YourStories = () => {
  useDocumentTitle("Your stories");
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" pb="3rem">
        <Leftbar />
        <Stories />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
      <BottomBar />
    </>
  );
};

export default YourStories;
