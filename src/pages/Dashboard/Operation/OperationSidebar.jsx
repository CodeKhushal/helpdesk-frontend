import DashboardPng from "../../../assets/Dashboard.png";
import MyTicketPng from "../../../assets/MyTickets.png";
import Ticket from "../../../assets/Ticket.png";
import Performance from "../../../assets/Performance.png";

export const operationSidebarItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardPng,
  },
  {
    label: "Ticket Approval",
    path: "/dashboard/ticket-approval",
    icon: Ticket,
  },
  {
    label: "My Ticket",
    path: "/dashboard/my-tickets",
    icon: MyTicketPng,
  },
  {
    label: "Performance",
    path: "/dashboard/performance",
    icon: Performance,
  },
];
