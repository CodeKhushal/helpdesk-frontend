import "./styles/NewTicketForm.css";
import Heading from "../../../components/ui/Heading";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const TicketForm = () => {
  return (
    <>
      <Heading value="Create New Ticket" className="ticket-form-heading" />
      <form className="ticket-form">
        <div className="form-row">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="ticketNo">Ticket No.</label>
              <input type="text" id="ticketNo" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
          </div>

          <div className="form-column">
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input type="text" id="department" />
            </div>
          </div>
        </div>

        <label htmlFor="subject">Subject:</label>
        <div className="form-group subject-group">
          <input type="text" id="subject" />
        </div>

        <div className="form-row">
          <div className="form-column">
            <label htmlFor="category">Category:</label>
            <div className="form-group">
              <input type="text" id="category" />
            </div>
            <label htmlFor="type">Type:</label>
            <div className="form-group">
              <input type="text" id="type" />
            </div>
            <label htmlFor="priority">Priority:</label>
            <div className="form-group">
              <input type="text" id="priority" />
            </div>
          </div>

          <div className="form-column description-column">
            <label htmlFor="description">Description:</label>
            <div className="description-box">
              <textarea id="description" rows="5" />
              <button type="button" className="attach-btn">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  size="1x"
                  className="facircle"
                  style={{ marginTop: "3" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="form-row submit-row">
          <div className="captcha-placeholder">
            <ReCAPTCHA sitekey="6Lcg4HQrAAAAAAZvSI7bv6EsFoVESQD8vbTfugG1" />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TicketForm;
