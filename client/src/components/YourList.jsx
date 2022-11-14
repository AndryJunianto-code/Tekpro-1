import {
  Typography,
  Stack,
  Divider,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import IndividualList from "./individual/IndividualList";

const YourList = () => {
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            Your Lists
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "8px",
              textTransform: "capitalize",
              marginBottom: "2rem",
            }}
          >
            New list
          </Button>
        </Stack>
        <Divider variant="fullWidth" sx={{ marginBottom: "3rem" }} />
        <IndividualList />
        <IndividualList />
        <IndividualList />
        <IndividualList />
      </BoxWrapper>
    </CustomBox>
  );
};

export default YourList;
