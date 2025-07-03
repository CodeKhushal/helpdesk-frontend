// import { useState } from "react";
// import { useAuth } from "../../components/context/AuthContext";
// import { Link } from "react-router-dom";
// import "./Auth.css";

// function Login() {
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData); // from AuthContext
//     } catch (err) {
//       console.error(err);
//       alert("Login failed!");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-box">
//         <h2>Helpdesk System</h2>
//         <form onSubmit={handleSignIn}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input-field"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="input-field"
//             required
//           />
//           <button type="submit" className="login-btn">
//             Sign In
//           </button>
//         </form>
//         <div className="login-footer">
//           <Link to="/forgot-password" className="forgot">
//             Forgot password
//           </Link>
//           <Link to="/signup" className="signup">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      // Redirect based on role
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "user") navigate("/dashboard");
      else if (user.role === "opsteam") navigate("/dashboard");
      else if (user.role === "techteam") navigate("/dashboard");
      else if (user.role === "admin") navigate("/dashboard");
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Helpdesk System</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        <div className="login-footer">
          <Link to="/forgot-password" className="forgot">
            Forgot password
          </Link>
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;