import { useAuth0 } from "@auth0/auth0-react";
import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import axios from "axios";
import BottomBar from "../components/BottomBar";
import { createNewBookmarkList } from "../request/bookmarkListRequest";
import { useMutation } from "react-query";
import CommentModal from "../components/CommentModal";

const Home = () => {
  const { user } = useAuth0();
  const [userExistBefore, setUserExistBefore] = useState(null);

  const { mutate: mutateBookmark, isSuccess: isSuccessPost } = useMutation(
    createNewBookmarkList,
    {}
  );

  const checkUserExist = async () => {
    try {
      const res = await axios.get(`/users/${user?.sub}`);
      if (res.data?.length === 0) {
        setUserExistBefore(false);
        return;
      }
      for (let i = 0; i < res.data?.length; i++) {
        if (res.data[i].userId === user.sub) {
          setUserExistBefore(true);
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const savedUser = async () => {
    try {
      const res = await axios.post("/users", {
        userId: user?.sub,
        username: user?.name,
        picture: user?.picture,
      });
      mutateBookmark({ name: "Reading List", userId: res.data?.userId });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    user && userExistBefore === false && savedUser();
  }, [userExistBefore]);

  useEffect(() => {
    user && checkUserExist();
  }, [user]);

  return (
    <Box minHeight="100vh" height="100%">
      <Navbar />
      <Stack direction="row" justifyContent="space-between" pb="5rem">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
      <BottomBar />
    </Box>
  );
};

export default Home;
