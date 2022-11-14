import { Box, Button, Typography, Stack, Card } from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";

const CreateBlog = () => {
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
          mt={4}
          mb={2}
          border={"1px solid #bdbebf"}
        ></Box>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Publish
        </Button>
      </BoxWrapper>
    </CustomBox>
  );
};

export default CreateBlog;
