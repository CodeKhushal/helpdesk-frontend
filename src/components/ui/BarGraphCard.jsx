import '../../styles/BarGraphCard.css';
import graph from '../../assets/Graph.png';

function BarGraphCard() {
  return (
    <div className="bargraph-card">
      <img src={graph} alt="bargraph" />
    </div>
  );
}

export default BarGraphCard;
