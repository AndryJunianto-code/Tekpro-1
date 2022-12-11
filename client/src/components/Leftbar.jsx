import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  BookmarksOutlined,
  ArticleOutlined,
  ModeOutlined,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useColorModeContext } from "../context/ColorModeContext";

const Leftbar = () => {
  const location = useLocation();
  const [onWhichSection, setOnWhichSection] = useState(location.pathname);
  const { colorMode } = useColorModeContext();
  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", lg: "flex" },
        justifyContent: "end",
        borderRight:
          colorMode === "light" ? "1px solid #e3e3e3" : "1px solid #292929",
        minHeight: "100vh",
      }}
      pr="1rem"
    >
      <Box position="fixed" top="7rem">
        <List>
          <Link to="/" className="link">
            <ListItem disablePadding>
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <HomeOutlined sx={{ width: "25px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      color={colorMode === "dark" ? "white" : ""}
                      fontWeight={onWhichSection === "/" ? "800" : ""}
                    >
                      Home
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/lists" className="link">
            <ListItem
              sx={{
                borderRadius: "7px",
                backgroundColor: onWhichSection === "List" ? "#e0e0e0" : "",
              }}
              disablePadding
            >
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <BookmarksOutlined style={{ width: "21px" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      color={colorMode === "dark" ? "white" : ""}
                      fontWeight={onWhichSection === "/lists" ? "800" : ""}
                    >
                      Reading List
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/stories" className="link">
            <ListItem disablePadding>
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <ArticleOutlined style={{ width: "21px" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      color={colorMode === "dark" ? "white" : ""}
                      fontWeight={onWhichSection === "/stories" ? "800" : ""}
                    >
                      Your Stories
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/write" className="link">
            <ListItem disablePadding>
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <ModeOutlined style={{ width: "22px" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      color={colorMode === "dark" ? "white" : ""}
                      fontWeight={onWhichSection === "/write" ? "800" : ""}
                    >
                      Write
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Leftbar;
