import { Typography, Stack, Divider, useTheme } from "@mui/material";
import { useState } from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualList from "./individual/IndividualList";
import NewListModal from "../modal/NewListModal";
import { fetchAllLists } from "../request/bookmarkListRequest";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const YourList = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const [openBookmarkModal, setOpenBookmarkModal] = useState(false);
  const handleOpenBookmarkModal = () => setOpenBookmarkModal(true);
  const handleCloseBookmarkModal = () => setOpenBookmarkModal(false);
  const {
    data: listsData,
    isSuccess: listsSuccess,
    refetch: listsRefetch,
  } = useQuery(["fetchAllLists", user?.sub], fetchAllLists, {
    retryDelay: 3000,
  });
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper sx={{ minHeight: "100vh", height: "100%" }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography
            color={theme.palette.mainWhite}
            fontSize={"1.8rem"}
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
              openBookmarkModal={openBookmarkModal}
              handleCloseBookmarkModal={handleCloseBookmarkModal}
              handleOpenBookmarkModal={handleOpenBookmarkModal}
              listsRefetch={listsRefetch}
            />
          ))}
      </BoxWrapper>
    </CustomBox>
  );
};

export default YourList;
