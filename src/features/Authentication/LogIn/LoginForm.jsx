import { useState } from "react";
import styles from "./LogInForm.module.css";
import { User } from "../../../contexts/userContext";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const navigate = useNavigate(); Maybe implement in future (currently not working as intended)

  //get the login function from user context
  const { login } = User();

  const handleChange = (e, name) => {
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3000/api/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      setEmail("");
      setPassword("");

      login(data.user, data.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => handleChange(e, "email")}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => handleChange(e, "password")}
      />
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LogInForm;
