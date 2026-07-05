import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Posts</Link>
      <Link to="/log-in">Log In</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default NavBar;
