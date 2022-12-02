import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Write from "./pages/Write";
import { darkTheme, theme } from "./theme";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <div className="bigBackground">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/write" element={<Write />} />
              <Route path="/lists" element={<ReadingList />} />
              <Route path="/stories" element={<YourStories />} />
              <Route path="/p/:postId" element={<SinglePost />} />
              <Route
                path="/list/:bookmarkId/:name"
                element={<ReadingListPosts />}
              />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/search/:query" element={<Search />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
