import React from "react";
import { Stack, styled, Box } from "@mui/material";
import {
  HomeOutlined,
  BookmarksOutlined,
  ArticleOutlined,
  ModeOutlined,
} from "@mui/icons-material";

const BottomBar = () => {
  const CustomBottomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("xs")]: {
      display: "flex",
    },
  }));
  return <div></div>;
};

export default BottomBar;
