import {
  Avatar,
  Box,
  Typography,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const IndividualComment = ({ commentData }) => {
  const { username, image, comment, createdAt, userId } = commentData;
  const theme = useTheme();
  return (
    <>
      <Divider sx={{ marginBottom: "1.2rem", marginTop: "1.2rem" }} />
      <Box>
        <Link className="link" to={`/profile/${userId}`}>
          <Stack direction="row" mb={"0.4rem"}>
            <Avatar
              src={image}
              alt="comments"
              sx={{ width: "33px", height: "33px" }}
            />
            <Stack display="flex" ml={"0.5rem"} color={theme.palette.mainWhite}>
              <Typography fontWeight={400} fontSize="0.7rem">
                {username}
              </Typography>
              <Typography variant="caption" fontWeight={300} fontSize="0.6rem">
                {new Date(createdAt).toDateString()}
              </Typography>
            </Stack>
          </Stack>
        </Link>
        <Typography variant="caption" color={theme.palette.mainWhite}>
          {comment}
        </Typography>
      </Box>
    </>
  );
};

export default IndividualComment;
