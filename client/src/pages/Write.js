import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import CreateBlog from "../components/CreateBlog";
import Leftbar from "../components/Leftbar";
import SuccessSnackbar from "../modal/SuccessSnackbar";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <Stack direction="row" justifyContent="space-between" py="2rem">
        <Leftbar />
        <CreateBlog setOpen={setOpen} setMessage={setMessage} />
        <Box
          flex={2}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        />
      </Stack>
      <SuccessSnackbar open={open} setOpen={setOpen} message={message} />

      <BottomBar />
    </>
  );
};

export default Write;
