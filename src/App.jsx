import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import LogIn from "./pages/LogIn";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
