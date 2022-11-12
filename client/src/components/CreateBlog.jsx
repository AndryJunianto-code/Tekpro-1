import {
  Box,
  Button,
  InputBase,
  styled,
  Typography,
  Stack,
  Card,
} from "@mui/material";
import React from "react";

const CreateBlog = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
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
  return (
    <CustomBox flex={4} mt={"3rem"} sx={{ overflowX: "hidden" }}>
      <BoxWrapper>
        <Typography fontWeight="700">Create Article</Typography>
        <Card
          sx={{ backgroundColor: "white", padding: "1rem" }}
          borderRadius={2}
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
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </Button>
            <input
              className="titleInput"
              placeholder="NEW POST TITLE HERE ..."
              fullWidth="true"
            />
            <input
              className="tagsInput"
              placeholder="ADD UP TO 4 TAGS"
              color="blue"
            />
          </Stack>
        </Card>

        <Box
          p={"1rem"}
          sx={{ backgroundColor: "white" }}
          borderRadius={2}
          height="12rem"
          my={4}
          border={"1px solid #bdbebf"}
        ></Box>

        <Button variant="contained">Publish</Button>
      </BoxWrapper>
    </CustomBox>
  );
};

export default CreateBlog;
