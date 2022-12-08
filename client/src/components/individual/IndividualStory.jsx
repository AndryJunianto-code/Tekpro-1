import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteStoryModal from "../../modal/DeleteStoryModal";
const IndividualStory = ({ story, userData, handleOpenDeleteStoryModal }) => {
  const { title, caption, _id, userIdBookmarked, authorId } = story;
  const theme = useTheme();
  const [isPostLiked, setIsPostLiked] = useState();
  const [isPostBookmarked, setIsPostBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleClickBox = (e) => {
    navigate(
      `/p/${_id}/${authorId}?liked=${isPostLiked}&bookmarked=${isPostBookmarked}`
    );
  };

  const handleDeleteStoryModal = (e) => {
    e.stopPropagation();
    handleOpenDeleteStoryModal(_id);
  };

  useEffect(() => {
    setIsPostLiked(userData[0]?.likedPosts.includes(_id));
    setIsPostBookmarked(userIdBookmarked.includes(userData[0]?.userId));
  }, []);
  return (
    <>
      <Box onClick={handleClickBox}>
        <Typography
          color={theme.palette.mainWhite}
          variant="body2"
          fontWeight={700}
          mb={"0.2rem"}
        >
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
        <Stack direction="row" alignItems={"center"}>
          <Typography
            fontSize={"0.7rem"}
            mr="0.7rem"
            color={theme.palette.darkGrey}
          >
            Published on Oct 23 {_id}
          </Typography>
          <IconButton
            size="small"
            color="error"
            onClick={handleDeleteStoryModal}
          >
            <RemoveCircleOutlineOutlinedIcon
              sx={{ width: "23px", height: "23px" }}
            />
          </IconButton>
        </Stack>
      </Box>

      <Divider variant="fullWidth" sx={{ my: "1.2rem" }} />
    </>
  );
};

export default IndividualStory;
