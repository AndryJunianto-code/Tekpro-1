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
  IconButton,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";

const IndividualPost = () => {
  const CustomTypography = styled(Typography)(({ theme }) => ({
    fontSize: "0.7rem",
    lineHeight: "20px",
    display: { xs: "none", sm: "block" },
  }));
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
        avatar={
          <Avatar
            src={
              "https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
          />
        }
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
        title="Andry Junianto"
        subheader="7 hours ago"
      />
      <Stack justifyContent="space-between" direction="row" alignItems="start">
        <Box marginRight={2}>
          <Typography sx={{ fontWeight: "700", fontSize: { lg: "1.2rem" } }}>
            How to be a programmer
          </Typography>
          <Typography
            className="postDesc"
            fontSize={"0.7rem"}
            display={{ xs: "none", sm: "-webkit-box" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet odio
            molestias ex vero esse quos vel, iusto excepturi culpa. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Sint est neque, alias
            magnam reprehenderit asperiores. Exercitationem nobis ut saepe!
          </Typography>

          <Box mt={"0.2rem"}>
            <button className="buttonTag">Python</button>
            <button className="buttonTag">Data Science</button>
            <button className="buttonTag">Css</button>
            <button className="buttonTag">AI</button>
          </Box>
        </Box>
        <img
          className="postImage"
          src="https://images.pexels.com/photos/5245865/pexels-photo-5245865.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </Stack>
    </Card>
  );
};

export default IndividualPost;
