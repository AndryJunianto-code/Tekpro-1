import { BookmarksOutlined, ThreeMp } from "@mui/icons-material";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { useTheme } from "@mui/material/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PostContent = ({ singlePostData }) => {
  const { title, subtitle, caption, postImage, authorImage, authorName } =
    singlePostData;
  const theme = useTheme();
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
