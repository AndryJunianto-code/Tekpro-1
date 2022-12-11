import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { BoxWrapper } from "../utilities/CustomBox";
import { styled, useTheme } from "@mui/material/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { bookmarkedPost, likedPost } from "../request/postRequest";
import useDocumentTitle from "../hook/useDocumentTitle";
import { useColorModeContext } from "../context/ColorModeContext";

const PostContent = ({
  singlePostData,
  setIsOpenCommentModal,
  isOpenCommentModal,
  refetchSinglePostData,
}) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const {
    title,
    _id,
    caption,
    postImage,
    authorImage,
    authorName,
    numOfLike,
    numOfComment,
  } = singlePostData;
  useDocumentTitle(title);
  const theme = useTheme();
  const { colorMode } = useColorModeContext();
  const [isPostLiked, setIsPostLiked] = useState();
  const [isPostBookmarked, setIsPostBookmarked] = useState();
  const link = new URLSearchParams(window.location.search);
  const linkQueryLiked = link.get("liked");
  const linkQueryBookmarked = link.get("bookmarked");

  const { mutate: mutateLike } = useMutation(likedPost, {
    onSuccess: () => {
      refetchSinglePostData();
    },
  });

  const CustomPostBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: isOpenCommentModal ? "hidden" : "",
    height: isOpenCommentModal ? "100%" : "",
  }));

  const handleLikePost = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    setIsPostLiked("true");
    mutateLike({
      action: "like",
      postId: _id,
      userId: user?.sub,
    });
  };
  const handleDislikePost = () => {
    setIsPostLiked("false");
    mutateLike({
      action: "dislike",
      postId: _id,
      userId: user?.sub,
    });
  };

  const handleOpenCommentModal = () => {
    setIsOpenCommentModal(!isOpenCommentModal);
  };

  useEffect(() => {
    setIsPostLiked(linkQueryLiked);
    setIsPostBookmarked(linkQueryBookmarked);
  }, []);

  return (
    <>
      <style>
        {`
         blockquote {
          background: ${colorMode === "light" ? "#f0f0f0;" : "#424242;"}
          border-left: ${
            colorMode === "light"
              ? "10px solid #1976d2;"
              : "10px solid #90caf9;"
          }
          margin: 1.5em 10px;
          padding: 0.5em 10px;
          color: ${colorMode === "light" ? "black;" : "white;"}
        }
      `}
      </style>
      <CustomPostBox flex={4} mt={5} pb="7rem">
        <BoxWrapper>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"}>
              <Avatar src={authorImage} alt="profile" />
              <Stack ml={2}>
                <Typography fontSize={"0.9rem"}>{authorName}</Typography>
                <Typography fontSize={"0.8rem"} color={theme.palette.darkGrey}>
                  Nov 9
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/*  */}
          <Box mt={2} color={theme.palette.mainWhite}>
            <Typography fontSize={"2rem"} fontWeight="900" lineHeight={"37px"}>
              {title}
            </Typography>
            <img className="singlePostImage" src={postImage} />
            <Typography
              dangerouslySetInnerHTML={{ __html: caption }}
            ></Typography>
          </Box>

          {/*  */}
          <Stack direction="row" alignItems="center" mt={5}>
            <Box display="flex" alignItems="center" mr={3}>
              {isPostLiked === "true" ? (
                <IconButton onClick={handleDislikePost}>
                  <FavoriteIcon
                    sx={{
                      color: "red",
                      width: "20px",
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={handleLikePost}>
                  <FavoriteBorderOutlinedIcon
                    sx={{
                      color: theme.palette.darkGrey,
                      width: "20px",
                    }}
                  />
                </IconButton>
              )}
              <Typography color={theme.palette.darkGrey} fontSize={"0.7rem"}>
                {numOfLike}
              </Typography>
            </Box>
            <Box
              onClick={handleOpenCommentModal}
              display="flex"
              alignItems="center"
            >
              <ChatBubbleOutlineIcon
                sx={{
                  mr: "0.3rem",
                  color: theme.palette.darkGrey,
                  width: "18px",
                }}
              />
              <Typography color={theme.palette.darkGrey} fontSize={"0.7rem"}>
                {numOfComment}
              </Typography>
            </Box>
          </Stack>

          {/*  */}
          <Divider
            variant="fullWidth"
            sx={{ background: "white", marginTop: "2rem" }}
          />

          {/* COMMENTS SECTION */}
        </BoxWrapper>
      </CustomPostBox>
    </>
  );
};

export default PostContent;
