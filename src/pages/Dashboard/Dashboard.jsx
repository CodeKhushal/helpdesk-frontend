import "../../styles/Dashboard.css";
import Navbar from "../../components/ui/Navbar";
import Sidebar from "../../components/ui/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content">
          <div className="content-box">
            <Outlet/>
          </div>
        </main>
      </div>
      <footer className="dashboard-footer"></footer>
    </div>
  );
}

export default Dashboard;
