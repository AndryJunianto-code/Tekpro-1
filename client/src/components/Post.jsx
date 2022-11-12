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

const Post = () => {
  const BoxWrapper = styled(Box)(({ theme }) => ({
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "75%",
      maxWidth: "700px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const CustomCardAction = styled(CardActions)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem",
  }));
  return (
    <CustomBox flex={4} marginBottom={"1rem"}>
      <BoxWrapper>
        <Card sx={{ paddingX: "1.3rem", paddingBottom: "1rem" }}>
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
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="start"
          >
            <Box marginRight={2}>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                How to be a programmer
              </Typography>
              <Typography className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                odio molestias ex vero esse quos vel, iusto excepturi culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                est neque, alias magnam reprehenderit asperiores. Exercitationem
                nobis ut saepe!
              </Typography>

              <CustomCardAction disableSpacing>
                <ButtonGroup size="small" aria-label="small button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </CustomCardAction>
            </Box>
            <CardMedia
              component="img"
              height="120"
              width="120"
              image="https://images.pexels.com/photos/14093489/pexels-photo-14093489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ objectFit: "cover" }}
            />
          </Stack>
        </Card>
      </BoxWrapper>
    </CustomBox>
  );
};

export default Post;
