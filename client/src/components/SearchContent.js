import { useAuth0 } from "@auth0/auth0-react";
import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostByTitle } from "../request/postRequest";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { useQuery } from "react-query";
import IndividualCardPost from "./individual/IndividualCardPost";

const Stories = () => {
  const { user } = useAuth0();
  const { query } = useParams();
  const { data: searchData, isSuccess: searchSuccess } = useQuery(
    ["fetchPostByTitle", query],
    fetchPostByTitle,
    { retryDelay: 3000 }
  );

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Typography fontSize={"1.8rem"} fontWeight={900}>
          Results for how
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "2rem", marginTop: "0.5rem" }}
        />
        {searchSuccess &&
          searchData.map((s) => <IndividualCardPost post={s} />)}
      </BoxWrapper>
    </CustomBox>
  );
};

export default Stories;
