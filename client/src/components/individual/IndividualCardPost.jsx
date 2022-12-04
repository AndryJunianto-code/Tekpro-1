import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Typography,
  Stack,
  IconButton,
  Menu,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import { likedPost } from "../../request/postRequest";
import { useMutation, useQuery } from "react-query";
import { fetchUser } from "../../request/userRequest";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import BookmarkModal from "../../modal/BookmarkModal";
import { fetchAllLists } from "../../request/bookmarkListRequest";
import IndividualTagButton from "./IndividualTagButton";

const IndividualCardPost = ({ post }) => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [isPostLiked, setIsPostLiked] = useState();
  const [isPostBookmarked, setIsPostBookmarked] = useState(false);
  const [bookmarkAnchor, setBookmarkAnchor] = useState(null);
  const [checked, setChecked] = useState([]);
  const open = Boolean(bookmarkAnchor);
  const {
    authorImage,
    authorName,
    subtitle,
    title,
    postImage,
    tags,
    _id,
    authorId,
    createdAt,
    userIdBookmarked,
  } = post;

  const { data: userData, isSuccess: userSuccess } = useQuery(
    ["fetchUser", user?.sub],
    fetchUser,
    { retryDelay: 3000 }
  );
  const { data: listsData, isSuccess: listsSuccess } = useQuery(
    ["fetchAllLists", user?.sub],
    fetchAllLists,
    {
      retryDelay: 3000,
    }
  );

  const { mutate: mutateLike } = useMutation(likedPost);

  const handleClose = () => {
    setBookmarkAnchor(null);
  };

  const handleLikePost = () => {
    setIsPostLiked(true);
    mutateLike({
      action: "like",
      postId: _id,
      userId: user?.sub,
    });
  };
  const handleDislikePost = () => {
    setIsPostLiked(false);
    mutateLike({
      action: "dislike",
      postId: _id,
      userId: user?.sub,
    });
  };
  const handleBookmarkPost = (e) => {
    setIsPostBookmarked(true);
    setBookmarkAnchor(e.currentTarget);
  };

  useEffect(() => {
    if (userData != null) {
      setIsPostLiked(userData[0]?.likedPosts.includes(_id));
      setIsPostBookmarked(userIdBookmarked.includes(user?.sub));
    }
  }, [userSuccess]);
  useEffect(() => {
    const newChecked = [...checked];
    listsSuccess &&
      listsData.map((list) => {
        if (list.postsId.includes(_id)) {
          newChecked.push(list._id);
        }
      });
    setChecked(newChecked);
  }, [listsSuccess]);
  return (
    <Card
      sx={{
        paddingX: { lg: "1.3rem" },
        paddingBottom: "1rem",
        marginBottom: "0.3rem",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <CardHeader
        avatar={
          <Link className="link" to={`/profile/${authorId}`}>
            <Avatar
              src={authorImage}
              sx={{
                width: { xs: "30px", lg: "30px" },
                height: { xs: "30px", lg: "30px" },
              }}
            />
          </Link>
        }
        action={
          <>
            {checked?.length > 0 ? (
              <IconButton onClick={handleBookmarkPost}>
                <BookmarkIcon
                  sx={{
                    width: "20px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleBookmarkPost}>
                <BookmarkBorderOutlinedIcon
                  sx={{
                    color: theme.palette.darkGrey,
                    width: "20px",
                    ":hover": {
                      color: "black",
                    },
                  }}
                />
              </IconButton>
            )}
            {isPostLiked ? (
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
                    ":hover": {
                      color: "black",
                    },
                  }}
                />
              </IconButton>
            )}
          </>
        }
        title={user?.sub === authorId ? `${authorName} (You)` : authorName}
        titleTypographyProps={{ fontSize: "14px", fontWeight: 500 }}
        subheader={new Date(createdAt).toDateString()}
        subheaderTypographyProps={{ fontSize: "12px" }}
      />
      <Link
        to={`/p/${_id}?liked=${isPostLiked}&bookmarked=${isPostBookmarked}`}
        className="link"
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="start"
          sx={{ paddingX: { xs: "1rem", lg: "0" } }}
        >
          <Box marginRight={2}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "0.8rem", lg: "1.3rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              className="postDesc"
              fontSize={"0.7rem"}
              display={{ xs: "none", sm: "-webkit-box" }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></Typography>

            <Box mt={"1.4rem"} onClick={(e) => e.stopPropagation()}>
              {tags &&
                tags.map((tag) => <IndividualTagButton tag={tag} key={v4()} />)}
            </Box>
          </Box>
          <img alt={title} className="postImage" src={postImage} />
        </Stack>
      </Link>

      <Menu open={open} anchorEl={bookmarkAnchor} onClose={handleClose}>
        <BookmarkModal checked={checked} setChecked={setChecked} post={post} />
      </Menu>
    </Card>
  );
};

export default IndividualCardPost;
