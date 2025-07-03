import { Link, useLocation } from "react-router-dom";
import { userSidebarItems } from "../../pages/Dashboard/User/UserSidebar";
import { operationSidebarItems } from "../../pages/Dashboard/Operation/OperationSidebar";
import "../../styles/Sidebar.css";
import { useAuth } from "../context/AuthContext";
import Arrow from "../../assets/Arrow.png";

function Sidebar() {
  const location = useLocation();
  const {user } = useAuth();

  const isActive = (path) => location.pathname === path;

  let sidebarItems = userSidebarItems;
  if (user?.role === "opsteam") sidebarItems = operationSidebarItems;
  // else if (user?.role === "techteam") sidebarItems = "/dashboard/techteam-profile";
  // else if (user?.role === "admin") sidebarItems = "/dashboard/admin-profile";

  return (
    <aside className="sidebar">
      <nav className="menu">
        {sidebarItems.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            className={`menu-item ${isActive(item.path) ? "active" : ""}`}
          >
            {isActive(item.path) && <span className="arrow"><img src={Arrow} alt="arrow" style={{width:"11px"}}/></span>}
            <img src={item.icon} alt={item.label} className="icon" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
