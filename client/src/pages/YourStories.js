import { Box, Stack } from "@mui/material";
import React from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";

const YourStories = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Stories />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
    </>
  );
};

export default YourStories;
