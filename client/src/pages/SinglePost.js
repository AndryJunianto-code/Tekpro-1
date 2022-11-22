import { Stack } from "@mui/material";
import React from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import PostContent from "../components/PostContent";
import PostRightbar from "../components/PostRightbar";
import { fetchSinglePost } from "../request/postRequest";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BottomBar from "../components/BottomBar";

const SinglePost = () => {
  let { postId } = useParams();
  const {
    data: singlePostData,
    isSuccess,
    isLoading,
  } = useQuery(["fetchSinglePost", postId], fetchSinglePost, {
    retryDelay: 3000,
  });
  useEffect(() => {
    console.log(singlePostData);
  }, [isSuccess]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />

        {isSuccess && (
          <>
            <PostContent singlePostData={singlePostData} />
            <PostRightbar />
          </>
        )}
      </Stack>
      <BottomBar />
    </>
  );
};

export default SinglePost;
