import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function SwitchPageButton({ to, label }) {
  return (
    <Link to={to}>
      <button id='buttonStyle'>{label}</button>
    </Link>
  );
}

export default SwitchPageButton;