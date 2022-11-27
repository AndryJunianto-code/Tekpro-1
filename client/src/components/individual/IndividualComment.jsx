import { Avatar, Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";

const IndividualComment = ({ commentData }) => {
  const { username, image, comment, createdAt } = commentData;
  return (
    <>
      <Divider sx={{ marginBottom: "1.2rem", marginTop: "1.2rem" }} />
      <Box>
        <Stack direction="row" mb={"0.4rem"}>
          <Avatar
            src={image}
            alt="comments"
            sx={{ width: "33px", height: "33px" }}
          />
          <Stack display="flex" ml={"0.5rem"}>
            <Typography fontWeight={400} fontSize="0.7rem">
              {username}
            </Typography>
            <Typography variant="caption" fontWeight={300} fontSize="0.6rem">
              {new Date(createdAt).toDateString()}
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="caption">{comment}</Typography>
      </Box>
    </>
  );
};

export default IndividualComment;
