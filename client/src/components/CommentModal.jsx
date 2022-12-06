import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  InputBase,
  styled,
  Typography,
  Stack,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IndividualComment from "./individual/IndividualComment";
import { useState } from "react";
import { createNewComment, fetchComments } from "../request/commentRequest";
import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { increasePostComment } from "../request/postRequest";
import { useColorModeContext } from "../context/ColorModeContext";
import CommentInput from "../input/CommentInput";

const CommentModal = ({ postId, setIsOpenCommentModal }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { colorMode } = useColorModeContext();
  const theme = useTheme();
  const [comment, setComment] = useState("");

  const ModalBox = styled(Box)(({ theme }) => ({
    height: "calc(100vh - 4rem)",
    backgroundColor: colorMode === "light" ? "#fafafa" : "#121212",
    zIndex: 1100,
    position: "absolute",
    top: "0",
    right: "0",
    width: "350px",
    maxWidth: "90vw",
    overflowY: "auto",
    padding: "2rem 1rem",
  }));

  const InputBox = styled(Box)(({ theme }) => ({
    padding: "0.7rem",
    marginTop: "1rem",
  }));

  const { mutate: mutateComment, isSuccess: isSuccessComment } =
    useMutation(createNewComment);

  const { mutate: mutateNumOfComment, isSuccess: isSuccessNumOfComment } =
    useMutation(increasePostComment);

  const {
    data: commentData,
    isSuccess: commentSuccess,
    refetch: refetchComment,
  } = useQuery(["fetchComments", postId], fetchComments, { retryDelay: 3000 });

  const handleComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleCloseModal = () => {
    setIsOpenCommentModal(false);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    mutateComment(
      {
        username: user?.name,
        image: user?.picture,
        comment: comment,
        postId: postId,
        userId: user?.sub,
      },
      {
        onSuccess: () => {
          refetchComment();
          setComment("");
          mutateNumOfComment({ postId: postId });
        },
      }
    );
  };
  useEffect(() => {}, [user]);
  return (
    <ModalBox>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography sx={{ fontWeight: "500" }} color={theme.palette.mainWhite}>
          Comments ({commentData?.length})
        </Typography>
        <ClearIcon
          sx={{ width: "20px", color: "#707070" }}
          onClick={handleCloseModal}
        />
      </Stack>
      {isAuthenticated ? (
        <InputBox sx={{ bgcolor: "background.paper" }}>
          <Stack
            direction="row"
            display="flex"
            alignItems="center"
            mb={"0.6rem"}
          >
            <Avatar
              src={
                user?.picture ||
                "https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              }
              alt="comments"
            />
            <Typography
              color={theme.palette.mainWhite}
              fontWeight={300}
              fontSize="0.7rem"
              ml={"0.5rem"}
            >
              {user?.name}
            </Typography>
          </Stack>
          <TextField
            variant="outlined"
            placeholder="What are your thoughts"
            multiline
            fullWidth
            maxRows={4}
            onChange={handleComment}
            value={comment}
            sx={{
              size: "small",
              marginTop: "0.4rem",
              marginLeft: "0.2rem",
            }}
          />
          <Stack
            direction="row"
            display="flex"
            justifyContent="right"
            mt={"1rem"}
          >
            <Button
              size="small"
              sx={{
                textTransform: "capitalize",
                marginRight: "0.5rem",
                fontSize: "0.7rem",
              }}
              onClick={() => setComment("")}
            >
              Cancel
            </Button>
            <Button
              size="small"
              sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
              variant="contained"
              onClick={handleSubmitComment}
            >
              Respond
            </Button>
          </Stack>
        </InputBox>
      ) : (
        <Typography mt="2rem">
          <p onClick={loginWithRedirect} style={{ color: "green" }}>
            Log in
          </p>{" "}
          to comment !
        </Typography>
      )}
      <Box>
        {commentSuccess &&
          commentData.map((c) => (
            <IndividualComment key={c._id} commentData={c} />
          ))}
      </Box>
    </ModalBox>
  );
};

export default CommentModal;
