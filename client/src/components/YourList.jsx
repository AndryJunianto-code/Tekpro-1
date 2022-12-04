import {
  Typography,
  Stack,
  Divider,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualList from "./individual/IndividualList";
import NewListModal from "../modal/NewListModal";
import { fetchAllLists } from "../request/bookmarkListRequest";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const YourList = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const {
    data: listsData,
    isSuccess: listsSuccess,
    refetch: listsRefetch,
  } = useQuery(["fetchAllLists", user?.sub], fetchAllLists, {
    retryDelay: 3000,
  });
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
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
          listsData?.map((list) => (
            <IndividualList key={list._id} list={list} />
          ))}
      </BoxWrapper>
    </CustomBox>
  );
};

export default YourList;
