import { Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchPostByTag } from "../request/postRequest";
import { BoxWrapper, CustomBox } from "../utilities/CustomBox";
import IndividualTag from "./individual/IndividualTag";
import { useQuery } from "react-query";
import IndividualCardPost from "./individual/IndividualCardPost";

const TagContent = () => {
  const { tagName } = useParams();
  const { data: tagData, isSuccess: tagSuccess } = useQuery(
    ["fetchPostByTag", tagName],
    fetchPostByTag,
    { retryDelay: 3000 }
  );

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"}>
      <BoxWrapper>
        <Stack direction="row">
          <Typography fontSize={"1.8rem"} color="#707070" mr="0.5rem">
            #
          </Typography>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            {tagName}
          </Typography>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ mb: "1.4rem", marginTop: "0.5rem" }}
        />
        {tagSuccess &&
          tagData.map((t) => <IndividualCardPost key={t._id} post={t} />)}
      </BoxWrapper>
    </CustomBox>
  );
};

export default TagContent;