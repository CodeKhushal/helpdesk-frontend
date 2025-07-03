import "../../styles/Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [language, setLanguage] = useState("BM");
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "BM" ? "BI" : "BM"));
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page after logout
  };

  let profileLink = "/dashboard/user-profile";
  if (user?.role === "opsteam") profileLink = "/dashboard/opsteam-profile";
  else if (user?.role === "techteam") profileLink = "/dashboard/techteam-profile";
  else if (user?.role === "admin") profileLink = "/dashboard/admin-profile";

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Helpdesk</h1>
      </div>
      <div className="navbar-right">
        <div className="language-toggle" onClick={toggleLanguage}>
          <div
            className={`toggle-slider ${language === "BI" ? "right" : "left"}`}
          />
          <span
            className={`toggle-label left-label ${
              language === "BM" ? "active-text" : ""
            }`}
          >
            BM
          </span>
          <span
            className={`toggle-label right-label ${
              language === "BI" ? "active-text" : ""
            }`}
          >
            BI
          </span>
        </div>
        <Link to={""} style={{ color: "black" }}>
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <Link to={profileLink} style={{ color: "black" }}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <button onClick={handleLogout} style={{ background: "none", border: "none", color: "black", cursor: "pointer", padding:"0" }}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
