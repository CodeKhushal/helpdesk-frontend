import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Set axios default header if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }, []);

  const login = async (formData) => {
    // const res = await axios.post("http://localhost:5000/api/auth/login", formData);
    const res = await axios.post("https://helpdesk-backend-7s5k.onrender.com/api/auth/login", formData);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
    setUser(res.data.user);
  };

  const signup = async (formData) => {
    // await axios.post("http://localhost:5000/api/auth/signup", formData);
    await axios.post("https://helpdesk-backend-7s5k.onrender.com/api/auth/signup", formData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// import { createContext, useContext } from "react";

// const AuthContext = createContext({ user: { role: "user" } }); // roles: 'user', 'opsteam', 'techteam', 'admin'

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const user1 = { name: "John Doe", role: "user" }; // Replace with real auth logic later
//   const user2 = { name: "John Doe", role: "opsteam" }; // Replace with real auth logic later
//   return <AuthContext.Provider value={{ user:user1 }}>{children}</AuthContext.Provider>;
// };

