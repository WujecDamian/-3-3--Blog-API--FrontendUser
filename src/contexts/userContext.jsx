import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user) {
      const userObj = JSON.parse(user);
      setUser(userObj);
    }

    if (token) {
      setToken(token);
    }
  }, []);

  const login = (userData, token) => {
    console.log(userData, token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
    setToken(token);
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const User = () => {
  return useContext(UserContext);
};
