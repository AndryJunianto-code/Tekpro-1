import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const IndividualCardPost = ({ post }) => {
  const { authorImage, authorName, subtitle, title, postImage, tags, _id } =
    post;
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
            <IconButton>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </>
        }
        title={authorName}
        subheader="7 hours ago"
      />
      <Link to={`/p/${_id}`} className="link">
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
