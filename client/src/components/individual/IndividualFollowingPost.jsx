import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

const IndividualFollowingPost = ({ post }) => {
  const { authorImage, authorName, title, createdAt, _id, authorId } = post;
  const theme = useTheme();
  dayjs.extend(relativeTime);
  return (
    <Box mb="1rem">
      <Link className="link" to={`/profile/${authorId}`}>
        <Stack direction="row" alignItems="center">
          <Avatar
            sx={{
              width: "22px",
              height: "22px",
            }}
            src={authorImage}
            alt="image"
            alignItems="center"
          />
          <Typography
            color={theme.palette.mainWhite}
            ml="0.5rem"
            fontSize="0.73rem"
            fontWeight="500"
          >
            {authorName}
          </Typography>
        </Stack>
      </Link>
      <Link className="link" to={`/p/${_id}/${authorId}`}>
        <Typography
          color={theme.palette.mainWhite}
          mt="0.3rem"
          fontWeight="700"
          fontSize="1.1rem"
        >
          {title}
        </Typography>
        <Typography fontSize="0.75rem" color={theme.palette.darkGrey}>
          {dayjs(createdAt).fromNow()}
        </Typography>
      </Link>
    </Box>
  );
};

export default IndividualFollowingPost;
