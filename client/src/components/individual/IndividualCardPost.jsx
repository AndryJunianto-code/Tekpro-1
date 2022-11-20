import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Typography,
  Stack,
  IconButton,
  Icon,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";
import { bookmarkedPost, likedPost } from "../../request/postRequest";
import { useMutation, useQuery } from "react-query";
import { fetchUser } from "../../request/userRequest";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const IndividualCardPost = ({ post }) => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [isPostLiked, setIsPostLiked] = useState();
  const [isPostBookmarked, setIsPostBookmarked] = useState(false);
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

  const { mutate: mutateLike } = useMutation(likedPost);
  const { mutate: mutateBookmark } = useMutation(bookmarkedPost);

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
  const handleBookmarkPost = () => {
    setIsPostBookmarked(true);
    mutateBookmark(
      {
        action: "bookmark",
        postId: _id,
        userId: user?.sub,
      },
      {
        onSuccess: (data) => console.log(data),
      }
    );
  };

  const handleDisbookmarkPost = () => {
    setIsPostBookmarked(false);
    mutateBookmark(
      {
        action: "disbookmark",
        postId: _id,
        userId: user?.sub,
      },
      {
        onSuccess: (data) => console.log(data),
      }
    );
  };

  useEffect(() => {
    if (userData != null) {
      setIsPostLiked(userData[0]?.likedPosts.includes(_id));
      setIsPostBookmarked(userIdBookmarked.includes(user?.sub));
    }
  }, [userSuccess]);
  return (
    <Card
      sx={{
        paddingX: "1.3rem",
        paddingBottom: "1rem",
        marginBottom: "0.3rem",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <CardHeader
        avatar={<Avatar src={authorImage} />}
        action={
          <>
            {isPostBookmarked ? (
              <IconButton onClick={handleDisbookmarkPost}>
                <BookmarkIcon
                  sx={{
                    width: "23px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleBookmarkPost}>
                <BookmarkBorderOutlinedIcon
                  sx={{
                    color: theme.palette.darkGrey,
                    width: "24px",
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
                    width: "23px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton onClick={handleLikePost}>
                <FavoriteBorderOutlinedIcon
                  sx={{
                    color: theme.palette.darkGrey,
                    width: "23px",
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
        subheader={new Date(createdAt).toDateString()}
      />
      <Link
        to={`/p/${_id}?liked=${isPostLiked}&bookmarked=${isPostBookmarked}`}
        className="link"
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="start"
        >
          <Box marginRight={2}>
            <Typography sx={{ fontWeight: "700", fontSize: { lg: "1.2rem" } }}>
              {title}
            </Typography>
            <Typography
              className="postDesc"
              fontSize={"0.7rem"}
              display={{ xs: "none", sm: "-webkit-box" }}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></Typography>

            <Box mt={"0.2rem"}>
              {tags.map((tag) => (
                <button className="buttonTag" key={v4()}>
                  {tag}
                </button>
              ))}
            </Box>
          </Box>
          <img alt={title} className="postImage" src={postImage} />
        </Stack>
      </Link>
    </Card>
  );
};

export default IndividualCardPost;
