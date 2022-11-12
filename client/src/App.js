import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Write from "./pages/Write";
import { darkTheme, theme } from "./theme";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="bigBackground">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
