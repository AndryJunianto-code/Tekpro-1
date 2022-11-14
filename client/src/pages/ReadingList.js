import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import YourList from "../components/YourList";

const ReadingList = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <YourList />
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

export default ReadingList;
