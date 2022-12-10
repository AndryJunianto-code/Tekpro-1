import { Box, Stack } from "@mui/material";
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
import { fetchUser } from "../request/userRequest";

const SinglePost = () => {
  let { postId, authorId } = useParams();
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);

  const { data: userQuery, refetch: userQueryRefetch } = useQuery(
    ["fetchUser", authorId],
    fetchUser,
    {
      retryDelay: 3000,
    }
  );

  const {
    data: singlePostData,
    isSuccess,
    isLoading,
    refetch: refetchSinglePostData,
  } = useQuery(["fetchSinglePost", postId], fetchSinglePost, {
    retryDelay: 3000,
  });

  const { mutate: mutatePostView } = useMutation(increasePostView, {});
  useEffect(() => {
    mutatePostView({ postId });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Navbar />
      <Box
        sx={{
          overflowY: isOpenCommentModal ? "hidden" : "",
          height: isOpenCommentModal ? "94vh" : "100%",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Leftbar />

          {isSuccess && (
            <>
              <PostContent
                singlePostData={singlePostData}
                setIsOpenCommentModal={setIsOpenCommentModal}
                isOpenCommentModal={isOpenCommentModal}
                refetchSinglePostData={refetchSinglePostData}
              />
              <PostRightbar
                userQuery={userQuery}
                userQueryRefetch={userQueryRefetch}
                profile={true}
              />
            </>
          )}
        </Stack>
      </Box>
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
