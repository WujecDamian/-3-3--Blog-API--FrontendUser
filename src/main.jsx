import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Post from "./pages/Post.jsx";
import Home from "./pages/home.jsx";
import Register from "./pages/Register.jsx";
import LogIn from "./pages/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "post/:postId",
    element: <Post></Post>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "log-in",
    element: <LogIn></LogIn>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
