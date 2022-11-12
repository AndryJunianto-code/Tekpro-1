import {
  Avatar,
  Box,
  Card,
  CardHeader,
  styled,
  Typography,
  Stack,
  CardMedia,
  CardActions,
  ButtonGroup,
  Button,
  ExpandMore,
  IconButton,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} pt={2}>
      <Stack>
        <Post />
        <Post />
        <Post />
      </Stack>
    </Box>
  );
};

export default Feed;
