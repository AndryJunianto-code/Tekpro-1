import { Typography, Stack, Card, InputBase, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import { useMutation } from "react-query";
import { publishImage, publishPost } from "../request/postRequest";
import { useAuth0 } from "@auth0/auth0-react";
import RichTextEditor from "./RichTextEditor";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ setOpen, setMessage }) => {
  const { user } = useAuth0();
  const theme = useTheme();
  const navigate = useNavigate();
  const [content, setContent] = useState("Write your story here :)");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [fileData, setFileData] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tags, setTags] = useState(null);

  const handleImage = (e) => {
    e.preventDefault();
    setFileData(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.value);
  };

  const {
    mutate: mutatePost,
    isSuccess: isSuccessPost,
    isLoading: isLoadingPost,
  } = useMutation(publishPost, {});

  const { mutate: mutateImage, isLoading: isLoadingImage } = useMutation(
    publishImage,
    {
      onSuccess: (data) => {
        mutatePost({
          title,
          subtitle,
          caption: content,
          postImage: data.image,
          authorName: user?.name,
          authorImage: user?.picture,
          authorId: user?.sub,
          tags: tags,
        });
      },
    }
  );

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
    setTags(e.target.value.split(","));
  };
  const buttonPost = async (e) => {
    e.preventDefault();
    if (previewImage === null) {
      setOpen(true);
      setMessage("Please add an image");
    } else if (title === "") {
      setOpen(true);
      setMessage("Please add a title");
    } else if (subtitle === "") {
      setOpen(true);
      setMessage("Please add a subtitle");
    } else if (content === "") {
      setOpen(true);
      setMessage("Please write a few words as content");
    } else {
      const formdata = new FormData();
      formdata.append("image", fileData);
      mutateImage({ formdata: formdata });
    }
  };

  useEffect(() => {
    if (isSuccessPost === true) {
      setOpen(true);
      setMessage("Published");
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  }, [isSuccessPost]);
  return (
    <CustomBox flex={4} mt={"3rem"} pb={"15.8rem"} sx={{ overflowX: "hidden" }}>
      <BoxWrapper>
        <Typography
          fontWeight="700"
          mb="0.2rem"
          color={theme.palette.mainWhite}
        >
          Create Article
        </Typography>
        <Card
          sx={{
            padding: "1rem",
            marginBottom: "1.5rem",
          }}
          border={"1px solid #bdbebf"}
        >
          <Stack direction="column">
            <label htmlFor="fileInput" className="imageButton">
              Add a cover image
            </label>
            <input
              onChange={handleImage}
              value={image}
              name="file"
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
            />
            <img src={previewImage} className="createBlogImage" />
            <InputBase
              onChange={handleTitle}
              placeholder="NEW POST TITLE HERE ..."
              fullWidth={true}
              required={true}
              sx={{ fontSize: "2rem", fontWeight: 600, marginTop: "1rem" }}
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
              placeholder="ADD UP TO 4 TAGS COMMA SEPERATED  ex: coding,css,java "
              fullWidth={true}
              sx={{ fontSize: "0.8rem" }}
            />
          </Stack>
        </Card>
        <RichTextEditor content={content} setContent={setContent} />
        <LoadingButton
          onClick={buttonPost}
          variant="contained"
          loading={isLoadingPost || isLoadingImage}
          sx={{ textTransform: "capitalize", marginTop: "1rem" }}
        >
          Publish
        </LoadingButton>
      </BoxWrapper>
    </CustomBox>
  );
};

export default CreateBlog;
