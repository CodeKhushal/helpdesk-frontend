import '../../styles/TeamSummaryCard.css';
import custSup1portIcon from '../../assets/customer-support.png';
import custSup2portIcon from '../../assets/customer-support-2.png';

function TeamSummaryCard() {
  return (
    <div className="team-summary-card">
      <div className="team-member">
        <img src={custSup1portIcon} alt="Tech Support" className="team-icon" />
        <p style={{marginTop:0, width:"50%", margin:"auto"}}><strong>3</strong><br />Technical Supports</p>
      </div>
      <div className="team-member">
        <img src={custSup2portIcon} alt="Ops Team" className="team-icon" />
        <p style={{marginTop:0, width:"50%", margin:"auto"}}><strong>4</strong><br />Operation Team</p>
      </div>
    </div>
  );
}

export default TeamSummaryCard;
