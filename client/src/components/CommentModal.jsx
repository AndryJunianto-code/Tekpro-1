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
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IndividualComment from "./individual/IndividualComment";
import { useState } from "react";
import { createNewComment, fetchComments } from "../request/commentRequest";
import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const ModalBox = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 4rem)",
  backgroundColor: "#fafafa",
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

const CommentModal = ({ postId, setIsOpenCommentModal }) => {
  const { user } = useAuth0();
  const [comment, setComment] = useState("");

  const { mutate: mutateComment, isSuccess: isSuccessComment } =
    useMutation(createNewComment);

  const {
    data: commentData,
    isSuccess: commentSuccess,
    refetch: refetchComment,
  } = useQuery(["fetchComments", postId], fetchComments, { retryDelay: 3000 });

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleCloseModal = () => {
    setIsOpenCommentModal(false);
  };

  const handleSubmitComment = () => {
    mutateComment(
      {
        username: user?.name,
        image: user?.picture,
        comment: comment,
        postId: postId,
      },
      {
        onSuccess: () => {
          refetchComment();
          setComment("");
        },
      }
    );
  };
  useEffect(() => {}, [user]);
  return (
    <ModalBox>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography sx={{ fontWeight: "500" }}>
          Comments ({commentData?.length})
        </Typography>
        <ClearIcon
          sx={{ width: "20px", color: "#707070" }}
          onClick={handleCloseModal}
        />
      </Stack>
      <InputBox sx={{ bgcolor: "background.paper" }}>
        <Stack direction="row" display="flex" alignItems="center" mb={"0.6rem"}>
          <Avatar
            src={
              user?.picture ||
              "https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
            alt="comments"
          />
          <Typography fontWeight={300} fontSize="0.7rem" ml={"0.5rem"}>
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
