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
import React from "react";
import { Link } from "react-router-dom";

const Leftbar = () => {
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
                  <HomeOutlined sx={{ color: "#292929" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography type="body2" sx={{ color: "#292929" }}>
                      Home
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/lists" className="link">
            <ListItem disablePadding>
              <ListItemButton className="leftbarButton">
                <ListItemIcon>
                  <BookmarksOutlined style={{ color: "#292929" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" style={{ color: "#292929" }}>
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
                  <ArticleOutlined style={{ color: "#292929" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" style={{ color: "#292929" }}>
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
                  <ModeOutlined style={{ color: "#292929" }} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="body2" sx={{ color: "#292929" }}>
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
