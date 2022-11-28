import { Stack } from "@mui/material";
import { useState } from "react";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import PostContent from "../components/PostContent";
import PostRightbar from "../components/PostRightbar";
import { fetchSinglePost, increasePostView } from "../request/postRequest";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BottomBar from "../components/BottomBar";
import CommentModal from "../components/CommentModal";
import BlackShadow from "../components/BlackShadow";

const SinglePost = () => {
  let { postId } = useParams();
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  const {
    data: singlePostData,
    isSuccess,
    isLoading,
  } = useQuery(["fetchSinglePost", postId], fetchSinglePost, {
    retryDelay: 3000,
  });

  const { mutate: mutatePostView } = useMutation(increasePostView, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  useEffect(() => {
    mutatePostView({ postId });
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />

        {isSuccess && (
          <>
            <PostContent
              singlePostData={singlePostData}
              setIsOpenCommentModal={setIsOpenCommentModal}
              isOpenCommentModal={isOpenCommentModal}
            />
            <PostRightbar />
          </>
        )}
      </Stack>
      <BottomBar />
      {isOpenCommentModal && (
        <>
          <CommentModal
            postId={postId}
            setIsOpenCommentModal={setIsOpenCommentModal}
          />
          <BlackShadow setIsOpenCommentModal={setIsOpenCommentModal} />
        </>
      )}
    </>
  );
};

export default SinglePost;
