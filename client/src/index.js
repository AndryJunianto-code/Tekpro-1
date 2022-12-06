import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { QueryClientProvider, QueryClient } from "react-query";
import { ColorModeContextProvider } from "./context/ColorModeContext";

const baseUrl =
  /* "http://localhost:5000/api"; */
  "https://tekpro-1-production.up.railway.app/api/";

axios.defaults.baseURL = baseUrl;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ColorModeContextProvider>
        <App />
      </ColorModeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
