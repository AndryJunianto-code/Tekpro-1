import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { useMutation } from "react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material";
import { deletePost } from "../request/postRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  p: 4,
};

const DeleteStoryModal = ({
  openStoryModal,
  handleCloseDeleteStoryModal,
  currentPostId,
  storyRefetch,
}) => {
  const theme = useTheme();
  const { mutate: mutateDeleteStory, isLoading } = useMutation(deletePost, {
    onSuccess: () => {
      storyRefetch();
      handleCloseDeleteStoryModal();
    },
  });

  const handleDeleteStory = () => {
    mutateDeleteStory({ postId: currentPostId });
  };
  return (
    <div>
      <Modal
        open={openStoryModal}
        onClose={handleCloseDeleteStoryModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h1"
            mb="1rem"
            color={theme.palette.mainWhite}
          >
            Delete this story ?
          </Typography>
          <Stack
            direction="row"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            justifyContent="center"
          >
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "capitalize" }}
            >
              Cancel
            </Button>
            <Box mx="0.6rem"></Box>
            <LoadingButton
              onClick={handleDeleteStory}
              variant="contained"
              color="error"
              size="small"
              loading={isLoading}
              sx={{ textTransform: "capitalize" }}
            >
              Delete
            </LoadingButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteStoryModal;
