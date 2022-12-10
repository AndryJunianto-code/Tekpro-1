import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { InputBase, Stack } from "@mui/material";
import { useMutation } from "react-query";
import { createNewBookmarkList } from "../request/bookmarkListRequest";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function BasicModal({ listsRefetch }) {
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [listTitleInput, setListTitleInput] = useState("");
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate: mutateList } = useMutation(createNewBookmarkList, {
    onSuccess: handleClose,
  });

  const handleListStyleInput = (e) => {
    setListTitleInput(e.target.value);
  };
  const createNewList = async () => {
    mutateList(
      { name: listTitleInput, userId: user?.sub },
      {
        onSuccess: () => listsRefetch(),
      }
    );
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "8px",
          textTransform: "capitalize",
          marginBottom: "2rem",
          marginTop: "0.2rem",
        }}
      >
        New list
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={theme.palette.mainWhite}
            mb="0.5rem"
          >
            Create new list
          </Typography>
          <InputBase
            placeholder="List name"
            maxRows={1}
            onChange={handleListStyleInput}
          />
          <Stack direction="row" justifyContent={"center"} mt="0.8rem">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Box mx="0.6rem"></Box>
            <Button variant="contained" onClick={createNewList}>
              Create
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
