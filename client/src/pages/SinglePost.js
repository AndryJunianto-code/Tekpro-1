import { Stack } from "@mui/material";
import React from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import PostContent from "../components/PostContent";
import Rightbar from "../components/Rightbar";

const SinglePost = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <PostContent />
        <Rightbar />
      </Stack>
    </>
  );
};

export default SinglePost;
