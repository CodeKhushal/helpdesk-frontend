import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPassword() {
  return (
    <div className="login-wrapper">
      <div className="login-box" style={{ height: "60%" }}>
        <p className="p-tag">
          Don’t worry, Enter your email below and we will send you a link to
          change password.
        </p>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <button
            type="submit"
            className="login-btn"
            style={{ display: "block", margin: "40px auto 20px" }}
          >
            Submit
          </button>
          <Link to={"/"}>
            <button
              className="signup-btn"
              style={{
                display: "block",
                margin: "10px auto",
                background: "0769DC",
              }}
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
