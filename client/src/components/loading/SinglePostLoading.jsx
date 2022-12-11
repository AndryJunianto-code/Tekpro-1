import { Box, Skeleton } from "@mui/material";
import React from "react";
import { CustomBox } from "../../utilities/CustomBox";

const SinglePostLoading = () => {
  return (
    <>
      <Box flex={4} display="flex" flexDirection="column" alignItems="center">
        <Skeleton
          sx={{ mt: "5rem", maxWidth: "500px" }}
          variant="rectangular"
          width={"80%"}
          height={"250px"}
        />
        <Skeleton
          sx={{ mt: "2rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
        <Skeleton
          sx={{ mt: "0.1rem", width: "80%", height: "1.3rem" }}
          variant="text"
        />
      </Box>
    </>
  );
};

export default SinglePostLoading;
