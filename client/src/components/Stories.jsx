import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualStory from "./individual/IndividualStory";
import { useQuery } from "react-query";
import { fetchPostByAuthor } from "../request/postRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { fetchUser } from "../request/userRequest";
import DeleteStoryModal from "../modal/DeleteStoryModal";

const Stories = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [openStoryModal, setOpenStoryModal] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");
  const handleOpenDeleteStoryModal = (postId) => {
    setOpenStoryModal(true);
    setCurrentPostId(postId);
  };
  const handleCloseDeleteStoryModal = () => setOpenStoryModal(false);
  const {
    data: storyData,
    isSuccess: storySuccess,
    refetch: storyRefetch,
    isLoading: storyLoading,
  } = useQuery(["fetchPostByAuthor", user?.sub], fetchPostByAuthor, {
    retryDelay: 3000,
  });
  const {
    data: userData,
    isSuccess: userSuccess,
    refetch: userRefetch,
  } = useQuery(["fetchUser", user?.sub], fetchUser, { retryDelay: 3000 });

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper sx={{ minHeight: "100vh", height: "100%" }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            color={theme.palette.mainWhite}
            fontSize={"2rem"}
            fontWeight={900}
          >
            Your Stories
          </Typography>

          <Link to="/write" className="link">
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                textTransform: "capitalize",
                marginBottom: "2rem",
                marginTop: "0.2rem",
              }}
            >
              Write a story
            </Button>
          </Link>
        </Stack>
        <Typography variant="body2" fontWeight={400}>
          Published {storyData?.length}
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "2rem", marginTop: "0.5rem" }}
        />
        {storySuccess &&
          userSuccess &&
          storyData?.map((story) => (
            <IndividualStory
              story={story}
              key={story._id}
              userData={userData}
              openStoryModal={openStoryModal}
              handleOpenDeleteStoryModal={handleOpenDeleteStoryModal}
              handleCloseDeleteStoryModal={handleCloseDeleteStoryModal}
            />
          ))}
        {storyLoading && <Typography>Fetching...</Typography>}
      </BoxWrapper>
      <DeleteStoryModal
        openStoryModal={openStoryModal}
        handleCloseDeleteStoryModal={handleCloseDeleteStoryModal}
        currentPostId={currentPostId}
        storyRefetch={storyRefetch}
      />
    </CustomBox>
  );
};

export default Stories;
