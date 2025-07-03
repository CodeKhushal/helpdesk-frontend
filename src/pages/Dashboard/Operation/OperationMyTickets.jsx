import { useState } from "react";
import "./styles/OperationMyTicketList.css";
import Heading from "../../../components/ui/Heading";
import TicketModal from "../../../components/ui/TicketModal";

const ticketData = [
  {
    id: 1234,
    subject: "Login issue",
    status: "In Progress",
    team: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: 1124,
    subject: "New ticket issue",
    status: "On hold",
    team: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1224,
    subject: "New request",
    status: "Closed",
    team: "Tech support",
    date: "13/08/21",
    rating: 4,
  },
  {
    id: 1244,
    subject: "Ticket submission",
    status: "In Progress",
    team: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: 1114,
    subject: "Login issue",
    status: "In Progress",
    team: "Tech support",
    date: "3/08/21",
    rating: 0,
  },
];

const statusColors = {
  "In Progress": "green",
  "On hold": "blue",
  Closed: "gray",
};

const OperationMyTickets = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = ticketData.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.id.toString().includes(search)
  );

  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredTickets.length / rowsPerPage);

  return (
    <div className="ticket-container">
      <Heading value="List of Ticket" className="ticket-heading" />

      <div className="ticket-toolbar">
        <input
          type="text"
          placeholder="Find ticket"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
      <label>
        Show:
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(parseInt(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>{" "}
        Entries
      </label>

      <table>
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Support by</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>
                <a href="#" style={{ textDecoration: "underline" }} onClick={() => setSelectedTicket(ticket)}>
                  {ticket.id}
                </a>
              </td>
              <td>{ticket.subject}</td>
              <td>
                <span className={`status ${statusColors[ticket.status]}`}>
                  {ticket.status}
                </span>
              </td>
              <td>{ticket.team}</td>
              <td>{ticket.date}</td>
              <td>
                <span style={{ color: "gold" }}>
                  {"★".repeat(ticket.rating)}
                </span>
                <span style={{ color: "grey" }}>
                  {"★".repeat(5 - ticket.rating)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <span>
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, filteredTickets.length)} of{" "}
          {filteredTickets.length} entries
        </span>

        <div>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>
          <span> {currentPage} </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
      <TicketModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
    </div>
  );
};

export default OperationMyTickets;
