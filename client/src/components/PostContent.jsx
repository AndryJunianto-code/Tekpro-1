import { BookmarksOutlined, ThreeMp } from "@mui/icons-material";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { useTheme } from "@mui/material/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PostContent = () => {
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
            <Avatar
              src={
                "https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              }
              alt="profile"
            />
            <Stack ml={2}>
              <Typography fontSize={"0.75rem"}>Andry Junianto</Typography>
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
          <Typography fontSize={"1.5rem"} fontWeight="900">
            How to Build an Income Stream with APIs
          </Typography>
          <img
            className="singlePostImage"
            src="https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
          <Typography mb={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            et officia explicabo distinctio architecto quos iste odit, quidem
            sapiente repudiandae debitis voluptates molestiae vitae porro alias
            incidunt possimus reiciendis eaque autem. Itaque incidunt corrupti
            vel odio veritatis dolores repudiandae cupiditate eligendi tenetur
            laudantium quaerat cum quas delectus quae commodi non, aperiam ut,
            esse error dignissimos at perspiciatis facere numquam? Harum
            consequatur ea magni incidunt sequi, omnis aliquam doloremque
            commodi perferendis placeat sit dolor similique soluta, quasi vel
            assumenda eum eligendi, culpa esse amet voluptatum expedita
            dignissimos nihil. Perferendis alias accusamus quasi culpa iusto,
            mollitia ipsam. Hic praesentium sint impedit?
          </Typography>
          <Typography mb={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            et officia explicabo distinctio architecto quos iste odit, quidem
            sapiente repudiandae debitis voluptates molestiae vitae porro alias
            incidunt possimus reiciendis eaque autem. Itaque incidunt corrupti
            vel odio veritatis dolores repudiandae cupiditate eligendi tenetur
            laudantium quaerat cum quas delectus quae commodi non, aperiam ut,
            esse error dignissimos at perspiciatis facere numquam? Harum
            consequatur ea magni incidunt sequi, omnis aliquam doloremque
            commodi perferendis placeat sit dolor similique soluta, quasi vel
            assumenda eum eligendi, culpa esse amet voluptatum expedita
            dignissimos nihil. Perferendis alias accusamus quasi culpa iusto,
            mollitia ipsam. Hic praesentium sint impedit?
          </Typography>
          <Typography mb={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            et officia explicabo distinctio architecto quos iste odit, quidem
            sapiente repudiandae debitis voluptates molestiae vitae porro alias
            incidunt possimus reiciendis eaque autem. Itaque incidunt corrupti
            vel odio veritatis dolores repudiandae cupiditate eligendi tenetur
            laudantium quaerat cum quas delectus quae commodi non, aperiam ut,
            esse error dignissimos at perspiciatis facere numquam? Harum
            consequatur ea magni incidunt sequi, omnis aliquam doloremque
            commodi perferendis placeat sit dolor similique soluta, quasi vel
            assumenda eum eligendi, culpa esse amet voluptatum expedita
            dignissimos nihil. Perferendis alias accusamus quasi culpa iusto,
            mollitia ipsam. Hic praesentium sint impedit?
          </Typography>
          <Typography mb={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            et officia explicabo distinctio architecto quos iste odit, quidem
            sapiente repudiandae debitis voluptates molestiae vitae porro alias
            incidunt possimus reiciendis eaque autem. Itaque incidunt corrupti
            vel odio veritatis dolores repudiandae cupiditate eligendi tenetur
            laudantium quaerat cum quas delectus quae commodi non, aperiam ut,
            esse error dignissimos at perspiciatis facere numquam? Harum
            consequatur ea magni incidunt sequi, omnis aliquam doloremque
            commodi perferendis placeat sit dolor similique soluta, quasi vel
            assumenda eum eligendi, culpa esse amet voluptatum expedita
            dignissimos nihil. Perferendis alias accusamus quasi culpa iusto,
            mollitia ipsam. Hic praesentium sint impedit?
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vel
            et officia explicabo distinctio architecto quos iste odit, quidem
            sapiente repudiandae debitis voluptates molestiae vitae porro alias
            incidunt possimus reiciendis eaque autem. Itaque incidunt corrupti
            vel odio veritatis dolores repudiandae cupiditate eligendi tenetur
            laudantium quaerat cum quas delectus quae commodi non, aperiam ut,
            esse error dignissimos at perspiciatis facere numquam? Harum
            consequatur ea magni incidunt sequi, omnis aliquam doloremque
            commodi perferendis placeat sit dolor similique soluta, quasi vel
            assumenda eum eligendi, culpa esse amet voluptatum expedita
            dignissimos nihil. Perferendis alias accusamus quasi culpa iusto,
            mollitia ipsam. Hic praesentium sint impedit?
          </Typography>
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
