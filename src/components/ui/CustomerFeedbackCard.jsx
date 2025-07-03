import '../../styles/CustomerFeedbackCard.css';

function CustomerFeedbackCard() {
  return (
    <div className="feedback-card">
      <p style={{marginTop:"6px", marginBottom:"0px", width:"50%", margin:"auto", fontSize:"large"}}>Customer Feedback</p>
      <div className="stars">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
      </div>
    </div>
  );
}

export default CustomerFeedbackCard;
