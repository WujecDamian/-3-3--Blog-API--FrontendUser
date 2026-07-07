import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { User } from "../contexts/userContext";

function NavBar() {
  const { user, logout } = User();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Posts
      </Link>

      {user ? (
        <>
          <Link
            to="/log-out"
            className={`${styles.link}, ${styles.last__link}`}
            onClick={logout}
          >
            Log out
          </Link>
          <p className={styles.username}>{user.name}</p>
        </>
      ) : (
        <>
          <Link to="/log-in" className={styles.link}>
            Log In
          </Link>
          <Link
            to="/register"
            className={`${styles.link}, ${styles.last__link}`}
          >
            Register
          </Link>
          <p className={styles.username}></p>
        </>
      )}
    </nav>
  );
}

export default NavBar;
