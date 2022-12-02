import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import CreateBlog from "../components/CreateBlog";
import Leftbar from "../components/Leftbar";
import SuccessSnackbar from "../modal/SuccessSnackbar";

const Write = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <CreateBlog setOpen={setOpen} />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
      <SuccessSnackbar open={open} setOpen={setOpen} />
      <BottomBar />
    </>
  );
};

export default Write;
