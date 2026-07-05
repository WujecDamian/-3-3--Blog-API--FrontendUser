import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Posts
      </Link>
      <Link to="/log-in" className={styles.link}>
        Log In
      </Link>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
    </nav>
  );
}

export default NavBar;
