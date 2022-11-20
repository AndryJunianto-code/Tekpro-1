import { Box, Button, Typography, Stack, Card, InputBase } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import { useMutation } from "react-query";
import { publishImage, publishPost } from "../request/postRequest";
import { useAuth0 } from "@auth0/auth0-react";
import RichTextEditor from "./RichTextEditor";

const CreateBlog = () => {
  const { user } = useAuth0();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [fileData, setFileData] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tags, setTags] = useState("");

  const handleImage = (e) => {
    e.preventDefault();
    setFileData(e.target.files[0]);
    setImage(e.target.value);
  };

  const { mutate: mutatePost, isSuccess: isSuccessPost } = useMutation(
    publishPost,
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const {
    mutate: mutateImage,
    isSuccess: isSuccessImage,
    data: postImage,
  } = useMutation(publishImage, {
    onSuccess: (data) => {
      mutatePost({
        title,
        subtitle,
        caption: content,
        postImage: data.image,
        authorName: user?.name,
        authorImage: user?.picture,
        authorId: user?.sub,
      });
    },
  });

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleSubtitle = (e) => {
    e.preventDefault();
    setSubtitle(e.target.value);
  };
  const handleTags = (e) => {
    e.preventDefault();
    setTags(e.target.value);
  };
  const buttonPost = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", fileData);
    mutateImage({ formdata: formdata });
  };
  return (
    <CustomBox flex={4} mt={"3rem"} sx={{ overflowX: "hidden" }}>
      <BoxWrapper>
        <Typography fontWeight="700">Create Article</Typography>
        <Card
          sx={{ backgroundColor: "white", padding: "1rem" }}
          border={"1px solid #bdbebf"}
        >
          <Stack direction="column">
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontSize: "0.75rem",
                width: "10rem",
                marginBottom: "1rem",
              }}
            >
              <label htmlFor="fileInput">Add a cover image</label>
              <input
                onChange={handleImage}
                value={image}
                name="file"
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
              />
            </Button>
            <InputBase
              onChange={handleTitle}
              placeholder="NEW POST TITLE HERE ..."
              fullWidth={true}
              required={true}
              sx={{ fontSize: "2rem", fontWeight: 600 }}
            />
            <InputBase
              onChange={handleSubtitle}
              placeholder="Subtitle"
              fullWidth={true}
              sx={{ fontSize: "1.3rem", fontWeight: 400 }}
            />
            <InputBase
              onChange={handleTags}
              className="tagsInput"
              placeholder="ADD UP TO 4 TAGS  ex: coding,css,java "
              fullWidth={true}
              sx={{ fontSize: "0.8rem" }}
            />
          </Stack>
        </Card>
        <RichTextEditor content={content} setContent={setContent} />
        <Button
          onClick={buttonPost}
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Publish
        </Button>
      </BoxWrapper>
    </CustomBox>
  );
};

export default CreateBlog;
