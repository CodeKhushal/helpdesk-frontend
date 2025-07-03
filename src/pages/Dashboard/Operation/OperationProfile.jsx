import { useState } from "react";
import "./styles/OperationProfile.css";
import Heading from "../../../components/ui/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import FileEdit from "../../../assets/FileEdit.png";
import { Link } from "react-router-dom";


const OperationProfile = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <>
      <Heading value={"User Profile"} />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-icon">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="8x"
              className="facircle"
            />
            <Link to="/dashboard/operation-profile-edit" className="top-right-icon" style={{paddingRight:"0px"}}>
              <img src={FileEdit} alt="Edit Profile" style={{marginTop:"5px", marginRight:"0"}}/>
            </Link>
          </div>
          <div className="profile-details">
            <p>Username</p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
        </div>

        <div className="feedback-card">
          <h4>Give Your Feedback</h4>
          <textarea
            placeholder="[Lorem Ipsum]"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={rating >= star ? "filled" : ""}
              >
                ★
              </span>
            ))}
          </div>
          <button className="submit-btn">Submit Feedback</button>
        </div>
      </div>
    </>
  );
};

export default OperationProfile;
