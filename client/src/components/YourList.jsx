import { Typography, Stack, Divider, useTheme } from "@mui/material";
import { useState } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualList from "./individual/IndividualList";
import NewListModal from "../modal/NewListModal";
import { fetchAllLists } from "../request/bookmarkListRequest";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteBookmarkModal from "../modal/DeleteBookmarkModal";

const YourList = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const [openBookmarkModal, setOpenBookmarkModal] = useState(false);
  const [currentBookmarkId, setCurrentBookmarkId] = useState("");
  const handleOpenBookmarkModal = (bookmarkId) => {
    setOpenBookmarkModal(true);
    setCurrentBookmarkId(bookmarkId);
  };
  const handleCloseBookmarkModal = () => setOpenBookmarkModal(false);
  const {
    data: listsData,
    isSuccess: listsSuccess,
    refetch: listsRefetch,
    isLoading: listsLoading,
  } = useQuery(["fetchAllLists", user?.sub], fetchAllLists, {
    retryDelay: 3000,
  });
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper sx={{ minHeight: "100vh", height: "100%" }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            color={theme.palette.mainWhite}
            fontSize={"2rem"}
            fontWeight={900}
          >
            Your Lists
          </Typography>
          <NewListModal listsRefetch={listsRefetch} />
        </Stack>
        <Divider variant="fullWidth" sx={{ marginBottom: "3rem" }} />
        {listsSuccess &&
          listsData?.map((list, index) => (
            <IndividualList
              index={index}
              key={list._id}
              list={list}
              handleOpenBookmarkModal={handleOpenBookmarkModal}
            />
          ))}
        {listsLoading && <Typography>Fetching...</Typography>}
      </BoxWrapper>
      <DeleteBookmarkModal
        openBookmarkModal={openBookmarkModal}
        handleCloseBookmarkModal={handleCloseBookmarkModal}
        listsRefetch={listsRefetch}
        currentBookmarkId={currentBookmarkId}
      />
    </CustomBox>
  );
};

export default YourList;
