import React from 'react';

function CalendarItem({ title, suggestion, color }) {
  return (
    <div className="controls-container">
      <div className="controls__title-container">
        <h3>{title}</h3>
        <p>...</p>
      </div>
      <p className="controls__suggestion">{suggestion}</p>
      <div className="controls__color" style={{ backgroundColor: `${color}` }}></div>
    </div>
  );
}

export default CalendarItem;
