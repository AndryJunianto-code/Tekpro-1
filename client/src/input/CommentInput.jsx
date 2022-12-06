import React from "react";
import { TextField } from "@mui/material";

const CommentInput = ({ handleComment, comment }) => {
  return (
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
  );
};

export default CommentInput;
