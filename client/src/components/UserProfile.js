import {
  Typography,
  Stack,
  Divider,
  Button,
  Avatar,
  InputBase,
  Box,
} from "@mui/material";
import React from "react";
import { CustomBox, BoxWrapper } from "../utilities/CustomBox";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { fetchUser, updateProfile } from "../request/userRequest";
import { useMutation, useQuery } from "react-query";
import ProfileTable from "./ProfileTable";

const UserProfile = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const [description, setDescription] = useState("");

  const { data: userData, refetch: userRefetch } = useQuery(
    ["fetchUser", user?.sub],
    fetchUser,
    {
      retryDelay: 3000,
    }
  );
  const { mutate: mutateProfile, isSuccess: isSuccessProfile } = useMutation(
    updateProfile,
    {
      onSuccess: (data) => {
        userRefetch();
        setDescription("");
      },
    }
  );

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const savedProfile = () => {
    mutateProfile({ userId: user?.sub, description: description });
  };

  return (
    <CustomBox flex={4} sx={{ overflowX: "hidden" }} mt={"3rem"} pb="3rem">
      <BoxWrapper>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography fontSize={"1.8rem"} fontWeight={900}>
            Profile
          </Typography>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ marginBottom: "3rem", mt: "1.4rem" }}
        />

        <Box mb="2rem">
          <Box mb="1.6rem">
            <Typography
              color={theme.palette.darkGrey}
              fontSize="14px"
              mb={"0.6rem"}
            >
              Profile Picture
            </Typography>
            <Stack direction="row" alignItems="center">
              <Avatar
                src={user?.picture}
                alt="preview"
                sx={{ width: "100px", height: "100px", marginRight: "1rem" }}
              />
            </Stack>
          </Box>
          <Box>
            <Typography color={theme.palette.darkGrey} fontSize="14px">
              Username
            </Typography>
            <Typography fontSize="20px" mb="1.4rem">
              Andry Junianto
            </Typography>
          </Box>
          <Box mb={"1.4rem"}>
            <Typography
              color={theme.palette.darkGrey}
              fontSize="14px"
              mb="0.4rem"
            >
              Bio
            </Typography>
            <Typography
              color={theme.palette.darkGrey}
              fontSize="14px"
              mb="0.4rem"
            >
              {userData && userData[0]?.description}
            </Typography>
            <InputBase
              value={description}
              onChange={handleDescription}
              fullWidth={true}
              placeholder="Describe yourself :)"
              sx={{
                backgroundColor: "rgba(0,0,0,0)",
                borderBottom: "1px solid #707070",
                fontSize: "14px",
              }}
            />
          </Box>
          <Button
            sx={{ textTransform: "capitalize", fontSize: "16px" }}
            onClick={savedProfile}
            variant="contained"
          >
            Save
          </Button>
        </Box>
        <Typography color={theme.palette.darkGrey} fontSize="14px" mb="0.4rem">
          Stats
        </Typography>
        <ProfileTable />
      </BoxWrapper>
    </CustomBox>
  );
};

export default UserProfile;
