import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const navigate = useNavigate(); Maybe implement in future (currently not working as intended)

  const handleChange = (e, name) => {
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "name") {
      setName(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newUserData = {
      email,
      name,
      password,
    };
    console.log(newUserData);
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newUserData),
    })
      .then((response) => response.json())
      .then(() => {
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => handleChange(e, "name")}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => handleChange(e, "password")}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
