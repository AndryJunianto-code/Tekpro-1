import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useColorModeContext } from "../../context/ColorModeContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const IndividualMorePost = ({ post }) => {
  const { createdAt, title, subtitle, _id, authorId } = post;
  const { colorMode } = useColorModeContext();
  const theme = useTheme();
  dayjs.extend(relativeTime);
  let date = dayjs(post.createdAt).format("MMM DD");

  return (
    <Link to={`/p/${_id}/${authorId}`} className="link">
      <Box>
        <Typography fontSize="0.9rem" color={theme.palette.darkGrey}>
          {date}
        </Typography>
        <Typography
          fontSize="1.4rem"
          fontWeight="800"
          color={theme.palette.mainWhite}
          sx={{
            lineHeight: { xs: "25px", lg: "30px" },
          }}
          mb="0.3rem"
        >
          {title}
        </Typography>
        <Typography
          className="postDesc"
          fontFamily={("Times New Roman", "Times", "serif")}
          color={theme.palette.mainWhite}
          sx={{
            lineHeight: { xs: "18px", lg: "20px" },
          }}
        >
          {subtitle}
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{
            background:
              colorMode === "light" ? "white" : "rgb(255,255,255,0.2)",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />
      </Box>
    </Link>
  );
};

export default IndividualMorePost;
