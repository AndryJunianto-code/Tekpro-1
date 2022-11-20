import { BookmarksOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { useTheme } from "@mui/material/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { likedPost } from "../request/postRequest";

const PostContent = ({ singlePostData }) => {
  const { user } = useAuth0();
  const { title, _id, caption, postImage, authorImage, authorName } =
    singlePostData;
  const theme = useTheme();
  const [isPostLiked, setIsPostLiked] = useState();
  const link = new URLSearchParams(window.location.search);
  const linkQueryLiked = link.get("liked");

  const { mutate: mutateLike } = useMutation(likedPost);
  const handleLikePost = () => {
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
  useEffect(() => {
    setIsPostLiked(linkQueryLiked);
  }, []);

  return (
    <CustomBox flex={4} mt={5}>
      <BoxWrapper>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"}>
            <Avatar src={authorImage} alt="profile" />
            <Stack ml={2}>
              <Typography fontSize={"0.75rem"}>{authorName}</Typography>
              <Typography fontSize={"0.7rem"} color={theme.palette.darkGrey}>
                Nov 9
              </Typography>
            </Stack>
          </Stack>
          <BookmarksOutlined
            sx={{
              color: theme.palette.darkGrey,
              width: "23px",
              ":hover": {
                color: "black",
              },
            }}
          />
        </Box>

        {/*  */}
        <Box mt={2}>
          <Typography fontSize={"2rem"} fontWeight="900">
            {title}
          </Typography>
          <img className="singlePostImage" src={postImage} />
          <Typography
            dangerouslySetInnerHTML={{ __html: caption }}
          ></Typography>
        </Box>

        {/*  */}
        <Stack direction="row" mt={5}>
          <Box display="flex" alignItems="center" mr={3}>
            {isPostLiked === "true" ? (
              <IconButton onClick={handleDislikePost}>
                <FavoriteIcon
                  sx={{
                    mr: "0.3rem",
                    color: "red",
                    width: "23px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleLikePost}>
                <FavoriteBorderOutlinedIcon
                  sx={{
                    mr: "0.3rem",
                    color: theme.palette.darkGrey,
                    width: "23px",
                    ":hover": {
                      color: "black",
                    },
                  }}
                />
              </IconButton>
            )}
            <Typography color={theme.palette.darkGrey} fontSize={"0.7rem"}>
              922
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ChatBubbleOutlineIcon
              sx={{
                mr: "0.3rem",
                color: theme.palette.darkGrey,
                width: "21px",
                ":hover": {
                  color: "black",
                },
              }}
            />
            <Typography color={theme.palette.darkGrey} fontSize={"0.7rem"}>
              20
            </Typography>
          </Box>
        </Stack>

        {/*  */}
        <Divider variant="fullWidth" sx={{ background: "black" }} />

        {/* COMMENTS SECTION */}
        <p>comments section</p>
      </BoxWrapper>
    </CustomBox>
  );
};

export default PostContent;
