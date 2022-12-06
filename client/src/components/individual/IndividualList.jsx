import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DeleteBookmarkModal from "../../modal/DeleteBookmarkModal";

const IndividualList = ({
  list,
  index,
  handleOpenBookmarkModal,
  handleCloseBookmarkModal,
  openBookmarkModal,
  listsRefetch,
}) => {
  const { name, _id } = list;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "1.6rem",
        }}
      >
        <CardContent sx={{ paddingY: "1.1rem", paddingX: "1.5rem" }}>
          <Typography fontWeight={900} fontSize={"1.2rem"} mb={"3rem"}>
            {name}
          </Typography>

          <Stack direction="row" display={"flex"} alignItems="center">
            <Link className="link" to={`/list/${list._id}/${name}`}>
              <Button
                variant="outlined"
                sx={{ borderRadius: "8px", marginRight: "1rem" }}
              >
                View list
              </Button>
            </Link>
            <Typography variant="caption" mr="1rem">
              {list?.postsId.length} stories
            </Typography>
            {index !== 0 && (
              <IconButton
                size="small"
                color="error"
                onClick={handleOpenBookmarkModal}
              >
                <RemoveCircleOutlineOutlinedIcon
                  sx={{ width: "23px", height: "23px" }}
                />
              </IconButton>
            )}
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            width: 183,
            height: 186,
            display: { xs: "none", md: "block" },
          }}
          image="https://images.pexels.com/photos/10772482/pexels-photo-10772482.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="Image"
        />
      </Card>
      <DeleteBookmarkModal
        openBookmarkModal={openBookmarkModal}
        handleCloseBookmarkModal={handleCloseBookmarkModal}
        bookmarkId={_id}
        listsRefetch={listsRefetch}
      />
    </>
  );
};

export default IndividualList;
