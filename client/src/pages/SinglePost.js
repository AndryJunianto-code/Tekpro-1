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
import { fetchUser, followUser, unfollowUser } from "../request/userRequest";
import SinglePostLoading from "../components/loading/SinglePostLoading";
import { useAuth0 } from "@auth0/auth0-react";

const SinglePost = () => {
  let { postId, authorId } = useParams();
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(null);

  const {
    data: userQuery,
    isSuccess: userQuerySuccess,
    refetch: userQueryRefetch,
  } = useQuery(["fetchUser", authorId], fetchUser, {
    retryDelay: 3000,
  });

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

  const { mutate: mutateFollow } = useMutation(followUser, {
    onSuccess: (data) => {
      userQueryRefetch();
    },
  });
  const { mutate: mutateUnfollow } = useMutation(unfollowUser, {
    onSuccess: (data) => {
      userQueryRefetch();
    },
  });
  const handleFollowUser = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    setIsFollowing(true);
    mutateFollow({
      userId: user?.sub,
      authorId: userQuery[0]?.userId,
      authorUsername: userQuery[0]?.username,
      authorPicture: userQuery[0]?.picture,
    });
  };
  const handleUnfollowUser = () => {
    setIsFollowing(false);
    mutateUnfollow({
      userId: user?.sub,
      authorId: userQuery[0]?.userId,
      authorUsername: userQuery[0]?.username,
      authorPicture: userQuery[0]?.picture,
    });
  };

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

          {isSuccess && userQuerySuccess && (
            <PostContent
              handleFollowUser={handleFollowUser}
              handleUnfollowUser={handleUnfollowUser}
              isFollowing={isFollowing}
              setIsFollowing={setIsFollowing}
              userQuery={userQuery}
              singlePostData={singlePostData}
              setIsOpenCommentModal={setIsOpenCommentModal}
              isOpenCommentModal={isOpenCommentModal}
              refetchSinglePostData={refetchSinglePostData}
            />
          )}
          {isLoading && <SinglePostLoading />}
          <PostRightbar
            handleFollowUser={handleFollowUser}
            isFollowing={isFollowing}
            handleUnfollowUser={handleUnfollowUser}
            userQuery={userQuery}
            profile={true}
            setIsFollowing={setIsFollowing}
          />
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
