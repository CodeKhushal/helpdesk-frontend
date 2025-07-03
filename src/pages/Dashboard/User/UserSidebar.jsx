import DashboardPng from "../../../assets/Dashboard.png";
import NewTicketPng from "../../../assets/NewTicket.png";
import MyTicketPng from "../../../assets/MyTickets.png";

export const userSidebarItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardPng,
  },
  {
    label: "New Ticket",
    path: "/dashboard/new-ticket",
    icon: NewTicketPng,
  },
  {
    label: "My Ticket",
    path: "/dashboard/my-tickets",
    icon: MyTicketPng,
  },
];
