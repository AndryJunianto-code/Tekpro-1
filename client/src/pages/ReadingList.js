import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BottomBar from "../components/BottomBar";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import YourList from "../components/YourList";

const ReadingList = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" pb="3rem">
        <Leftbar />
        <YourList />
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
