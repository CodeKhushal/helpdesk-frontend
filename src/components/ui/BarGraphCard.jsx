import React from 'react';
import '../../styles/BarGraphCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import vector from '../../assets/vector.png';

function BarGraphCard() {
  return (
    <div className="bargraph-card">
      <img src={vector} alt="bargraph" />
    </div>
  );
}

export default BarGraphCard;
