import { Box } from "@mui/material";
import React from "react";
import { useColorModeContext } from "../context/ColorModeContext";
import RightbarFollowingPostSection from "./RightbarFollowingPostSection";
import RightbarTopicSection from "./RightbarTopicSection";
import RightbarWriterSection from "./RightbarWriterSection";

const Rightbar = () => {
  const { colorMode } = useColorModeContext();
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", lg: "block" },
        borderLeft:
          colorMode === "light" ? "1px solid #e3e3e3" : "1px solid #292929",
      }}
      py={"0.8rem"}
      pl="1rem"
    >
      <Box position="fixed" overflowY={"auto"}>
        <RightbarTopicSection />
        <RightbarWriterSection />
        <RightbarFollowingPostSection />
      </Box>
    </Box>
  );
};

export default Rightbar;
