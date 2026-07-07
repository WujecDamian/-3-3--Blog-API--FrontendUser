import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { User } from "../contexts/UserContext";

function NavBar() {
  /*  const { user } = User();
  if (user) {
    const userObj = JSON.parse(user);
  }
 */
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
      {/*       {user ? (
        <p className={styles.username}>{userObj.name}</p>
      ) : (
        <p className={styles.username}></p>
      )} */}
    </nav>
  );
}

export default NavBar;
