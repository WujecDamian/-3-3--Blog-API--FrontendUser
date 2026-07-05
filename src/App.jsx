import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import LogIn from "./pages/LogIn";

import "./App.css";

function App() {
  return (
    <Router>
      <Routers>
        <Route path="/" element={<RootLayout></RootLayout>}>
          <Router index element={<Home></Home>}></Router>
          <Router path="register" element={<Register></Register>}></Router>
          <Router path="log-in" element={<LogIn></LogIn>}></Router>
          <Router path="post/:postId" element={<Post></Post>}></Router>
        </Route>
      </Routers>
    </Router>
  );
}

export default App;
