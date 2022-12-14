import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import YourListPosts from "../components/YourListPosts";

const ReadingList = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <YourListPosts />
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

export default ReadingList;
