import { useAuth0 } from "@auth0/auth0-react";
import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostByTitle } from "../request/postRequest";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import { useQuery } from "react-query";
import IndividualCardPost from "./individual/IndividualCardPost";
import { fetchUserByUsername } from "../request/userRequest";
import IndividualUser from "./individual/IndividualUser";

const Stories = () => {
  const { query } = useParams();
  const [searchNavigation, setSearchNavigation] = useState("");
  const { data: searchData, isSuccess: searchSuccess } = useQuery(
    ["fetchPostByTitle", query],
    fetchPostByTitle,
    { retryDelay: 3000 }
  );

  const {
    data: userSearchData,
    isSuccess: userSearchSuccess,
    refetch: userSearchRefetch,
  } = useQuery(["fetchUserByUsername", query], fetchUserByUsername, {
    retryDelay: 3000,
  });

  useEffect(() => {
    setSearchNavigation("Stories");
  }, []);
  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Stack direction="row">
          <Typography fontSize={"1.8rem"} color="#707070" mr="0.5rem">
            Results for
          </Typography>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            {query}
          </Typography>
        </Stack>
        <Stack direction="row" mt="1rem">
          <Typography
            onClick={() => setSearchNavigation("Stories")}
            fontSize="0.7rem"
            mr="1.5rem"
            sx={{ cursor: "pointer" }}
            fontWeight={searchNavigation === "Stories" && "500"}
            className={searchNavigation === "Stories" && "underline"}
          >
            Stories
          </Typography>
          <Typography
            onClick={() => setSearchNavigation("People")}
            fontSize="0.7rem"
            sx={{ cursor: "pointer" }}
            fontWeight={searchNavigation === "People" && "500"}
            className={searchNavigation === "People" && "underline"}
          >
            People
          </Typography>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ mb: "1.4rem", marginTop: "0.5rem" }}
        />
        {searchSuccess &&
          searchNavigation === "Stories" &&
          (searchData?.length > 0 ? (
            searchData.map((s) => <IndividualCardPost key={s._id} post={s} />)
          ) : (
            <p>No story found</p>
          ))}

        {userSearchSuccess &&
          searchNavigation === "People" &&
          (userSearchData?.length > 0 ? (
            userSearchData.map((s) => (
              <IndividualUser
                key={s._id}
                u={s}
                userSearchRefetch={userSearchRefetch}
              />
            ))
          ) : (
            <p>No people found</p>
          ))}
      </BoxWrapper>
    </CustomBox>
  );
};

export default Stories;
