// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Auth.css";

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     console.log("Sign up attempted with:", formData);
//     // Add your registration logic here
//   };
//   return (
//     <div className="login-wrapper">
//       <div className="login-box">
//         <h2>Helpdesk System</h2>
//         <p>Sign up here</p>
//         <form onSubmit={handleSignUp}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleInputChange}
//             className="input-field"
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
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="input-field"
//             required
//           />
//           <div>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleInputChange}
//             >
//               <option value="user">User</option>
//               <option value="opsteam">Ops Team</option>
//               <option value="techteam">Tech Team</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//           <button type="submit" className="signup-btn">
//             Sign Up
//           </button>
//         </form>
//         <div className="signup-footer">
//           <Link to="/forgot-password" className="forgot">
//             Forgot password
//           </Link>
//           <Link to="/" className="signup">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";
import "./Auth.css";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "user",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful! Please login.");
      navigate("/");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Helpdesk System</h2>
        <p>Sign up here</p>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="opsteam">Ops Team</option>
              <option value="techteam">Tech Team</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <div className="signup-footer">
          <Link to="/forgot-password" className="forgot">
            Forgot password
          </Link>
          <Link to="/" className="signup">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;