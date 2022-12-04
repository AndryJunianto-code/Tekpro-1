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

const Leftbar = () => {
  const location = useLocation();
  const [onWhichSection, setOnWhichSection] = useState(location.pathname);

  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", lg: "flex" },
        justifyContent: "end",
      }}
    >
      <Box position="fixed" top="4rem">
        <List>
          <Link to="/" className="link">
            <ListItem disablePadding>
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <HomeOutlined sx={{ color: "#292929", width: "25px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      sx={{
                        color: "#292929",
                      }}
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
                  <BookmarksOutlined
                    style={{ color: "#292929", width: "21px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      style={{ color: "#292929" }}
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
                  <ArticleOutlined
                    style={{ color: "#292929", width: "21px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      style={{ color: "#292929" }}
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
                  <ModeOutlined style={{ color: "#292929", width: "22px" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      sx={{ color: "#292929" }}
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
