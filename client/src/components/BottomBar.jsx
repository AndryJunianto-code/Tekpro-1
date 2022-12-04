import React from "react";
import { Stack, styled, Box, IconButton } from "@mui/material";
import {
  HomeOutlined,
  BookmarksOutlined,
  ArticleOutlined,
  ModeOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const BottomBar = () => {
  const location = useLocation();
  const [onWhichSection, setOnWhichSection] = useState(location.pathname);
  const CustomStack = styled(Stack)(({ theme }) => ({
    position: "relative",
    bottom: "0px",
    left: "0px",
    width: "85%",

    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  }));
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "none" },
        width: "100%",
        position: "fixed",
        bottom: "0px",
        left: "0px",

        alignItems: "center",
        justifyContent: "center",
        zIndex: 1100,
        boxShadow: 12,
        backgroundColor: "white",
        border: "1px solid #fafafa",
        paddingBottom: "0.2rem",
      }}
    >
      <CustomStack direction="row" justifyContent="space-between">
        <Link to="/" className="link">
          <IconButton flex={1}>
            <HomeOutlined
              position="fixed"
              sx={{
                color: onWhichSection === "/" ? "black" : "#707070",
                width: "23px",
              }}
            />
          </IconButton>
        </Link>
        <Link to="/lists" className="link">
          <IconButton flex={1}>
            <BookmarksOutlined
              position="fixed"
              sx={{
                color: onWhichSection === "/lists" ? "black" : "#707070",
                width: "18px",
              }}
            />
          </IconButton>
        </Link>
        <Link to="/stories" className="link">
          <IconButton flex={1}>
            <ArticleOutlined
              position="fixed"
              sx={{
                color: onWhichSection === "/stories" ? "black" : "#707070",
                width: "20px",
              }}
            />
          </IconButton>
        </Link>
        <Link to="/write" className="link">
          <IconButton flex={1}>
            <ModeOutlined
              position="fixed"
              sx={{
                color: onWhichSection === "/write" ? "black" : "#707070",
                width: "20px",
              }}
            />
          </IconButton>
        </Link>
      </CustomStack>
    </Box>
  );
};

export default BottomBar;
