import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContextProvider from "./contexts/userContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <App></App>
    </UserContextProvider>
  </StrictMode>,
);
