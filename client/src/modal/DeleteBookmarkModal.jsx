import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { deleteBookmark } from "../request/bookmarkListRequest";
import { useMutation } from "react-query";
import LoadingButton from "@mui/lab/LoadingButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export default function BasicModal({
  openBookmarkModal,
  handleCloseBookmarkModal,
  bookmarkId,
  listsRefetch,
}) {
  const {
    mutate: mutateDeleteBookmark,
    isSuccess,
    isLoading,
  } = useMutation(deleteBookmark, {
    onSuccess: () => {
      handleCloseBookmarkModal();
      listsRefetch();
    },
  });

  const handleDeleteBookmark = () => {
    mutateDeleteBookmark({ bookmarkId });
  };
  return (
    <div>
      <Modal
        open={openBookmarkModal}
        onClose={handleCloseBookmarkModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h1"
            mb="1rem"
          >
            Delete List ?
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
              onClick={handleDeleteBookmark}
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
}
