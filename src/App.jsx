import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./components/context/AuthContext";
import PrivateRoute from "./components/context/PrivateRoute";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import Dashboard from "./pages/Dashboard/Dashboard";
import Unauthorized from "./pages/Auth/Unauthorized.jsx";

import UserDashboard from "./pages/Dashboard/User/UserDashboard";
import UserNewTicket from "./pages/Dashboard/User/UserNewTicket";
import UserMyTickets from "./pages/Dashboard/User/UserMyTickets";
import UserProfile from "./pages/Dashboard/User/UserProfile.jsx";
import UserProfileEdit from "./pages/Dashboard/User/UserProfileEdit.jsx";

import OperationDashboard from "./pages/Dashboard/Operation/OperationDashboard";
import OperationMyTickets from "./pages/Dashboard/Operation/OperationMyTickets";
import OperationPerformance from "./pages/Dashboard/Operation/OperationPerformance.jsx";
import OperationProfile from "./pages/Dashboard/Operation/OperationProfile.jsx";
import OperationTicketApproval from "./pages/Dashboard/Operation/OperationTicketApproval.jsx";
import OperationProfileEdit from "./pages/Dashboard/Operation/OperationProfileEdit.jsx";
// import TechDashboard from "./pages/Dashboard/Tech/TechDashboard";
// import AdminDashboard from "./pages/Dashboard/Admin/AdminDashboard";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* /dashboard layout */}
        <Route
          path="/dashboard"
          element={<PrivateRoute user={user} element={<Dashboard />} />}
        >
          {/* role-based default route */}
          {user?.role === "user" && (
            <Route index path="/dashboard" element={<UserDashboard />} />
          )}
          {user?.role === "opsteam" && (
            <Route index element={<OperationDashboard />} />
          )}
          {/* {user?.role === "techteam" && (
            <Route index element={<TechDashboard />} />
          )} */}
          {/* {user?.role === "admin" && (
            <Route index element={<AdminDashboard />} />
          )} */}

          {/* Example nested routes */}
          {user?.role === "user" && (
            <>
              <Route path="new-ticket" element={<UserNewTicket/>} />
              <Route path="my-tickets" element={<UserMyTickets/>} />
              <Route path="user-profile" element={<UserProfile/>} />
              <Route path="user-profile-edit" element={<UserProfileEdit/>} />
            </>
          )}
          {user?.role === "opsteam" && (
            <>
              {/* <Route path="new-ticket" element={<OperationNewTicket/>} /> */}
              <Route path="my-tickets" element={<OperationMyTickets/>} />
              <Route path="opsteam-profile" element={<OperationProfile/>} />
              <Route path="performance" element={<OperationPerformance/>} />
              <Route path="ticket-approval" element={<OperationTicketApproval/>} />
              <Route path="operation-profile-edit" element={<OperationProfileEdit/>} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
