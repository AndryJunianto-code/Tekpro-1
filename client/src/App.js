import { Box, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
