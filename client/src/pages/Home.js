import { useAuth0 } from "@auth0/auth0-react";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import axios from "axios";

const Home = () => {
  const { user } = useAuth0();
  const [userExistBefore, setUserExistBefore] = useState(null);

  const checkUserExist = async () => {
    try {
      const res = await axios.get(`/users/${user?.sub}`);
      console.log(res.data);
      if (res.data?.length == 0) {
        setUserExistBefore(false);
        return;
      }
      for (let i = 0; i < res.data?.length; i++) {
        if (res.data[i].userId === user.sub) {
          setUserExistBefore(true);
          console.log("user exist");
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const savedUser = async () => {
    try {
      await axios.post("/users", {
        userId: user?.sub,
        username: user?.name,
      });
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
    <>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </>
  );
};

export default Home;
