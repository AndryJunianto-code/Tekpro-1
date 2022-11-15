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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <div className="bigBackground">
            <Routes>
              <Route path="/" element={<SinglePost />} />
              <Route path="/write" element={<Write />} />
              <Route path="/lists" element={<ReadingList />} />
              <Route path="/stories" element={<YourStories />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
