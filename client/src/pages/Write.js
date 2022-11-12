import { Box, Stack } from "@mui/material";
import React from "react";
import CreateBlog from "../components/CreateBlog";
import Leftbar from "../components/Leftbar";

const Write = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <CreateBlog />
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

export default Write;
