import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Write from "./pages/Write";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadingList from "./pages/ReadingList";
import YourStories from "./pages/YourStories";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import SinglePost from "./pages/SinglePost";
import ReadingListPosts from "./pages/ReadingListPosts";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Tag from "./pages/Tag";
import { useColorModeContext } from "./context/ColorModeContext";
import { createTheme } from "@mui/material";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const { colorMode, setColorMode } = useColorModeContext();
  const theme = createTheme({
    palette: {
      mode: colorMode,
      background: {},
      mainBlue: "#026aa7",
      mainWhite: colorMode === "light" ? "black" : "rgba(255,255,255,0.87)",
      darkGrey: colorMode === "light" ? "#707070" : "rgba(255,255,255,0.6)",
    },
  });

  useEffect(() => {
    if (localStorage.getItem("isDarkMode") === null) {
      localStorage.setItem("isDarkMode", "light");
      return;
    }
    setColorMode(
      localStorage.getItem("isDarkMode") === "true" ? "dark" : "light"
    );
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Box backgroundColor={theme.palette.background.default}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/write" element={<Write />} />
                <Route path="/lists" element={<ReadingList />} />
                <Route path="/stories" element={<YourStories />} />
              </Route>
              <Route path="/p/:postId/:authorId" element={<SinglePost />} />
              <Route
                path="/list/:bookmarkId/:name"
                element={<ReadingListPosts />}
              />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/tag/:tagName" element={<Tag />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
