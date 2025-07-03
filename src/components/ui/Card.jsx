import '../../styles/Card.css';

function Card({ title, count, bgColor }) {
  return (
    <div className="status-card" style={{ backgroundColor: bgColor }}>
      <p className="card-title">{title}</p>
      <h2 className="card-count">{count}</h2>
    </div>
  );
}

export default Card;
