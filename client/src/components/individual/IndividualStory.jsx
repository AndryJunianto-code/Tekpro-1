import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { theme } from "../../theme";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const IndividualStory = ({ story, userData }) => {
  const { title, caption, _id, userIdBookmarked } = story;
  const [isPostLiked, setIsPostLiked] = useState();
  const [isPostBookmarked, setIsPostBookmarked] = useState(false);

  useEffect(() => {
    setIsPostLiked(userData[0]?.likedPosts.includes(_id));
    setIsPostBookmarked(userIdBookmarked.includes(userData[0]?.userId));
  }, []);
  return (
    <Link
      to={`/p/${_id}?liked=${isPostLiked}&bookmarked=${isPostBookmarked}`}
      className="link"
    >
      <Box>
        <Typography variant="body2" fontWeight={700} mb={"0.2rem"}>
          {title}
        </Typography>
        <Typography
          className="storyDesc"
          variant="caption"
          color={theme.palette.darkGrey}
          fontWeight={400}
          marginBottom={"0.8rem"}
          lineHeight={"17px"}
          dangerouslySetInnerHTML={{ __html: caption }}
        />
        <Typography fontSize={"0.7rem"} color={theme.palette.darkGrey}>
          Published on Oct 23
        </Typography>
      </Box>
      <Divider variant="fullWidth" sx={{ my: "1.2rem" }} />
    </Link>
  );
};

export default IndividualStory;
