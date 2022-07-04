import React, { useState } from 'react';
import './Calendar.scss';
// import CalendarItem from './CalendarItem';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { images } from '../../constants/index';
import CalendarItem from './CalendarItem';

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  return (
    <main className="calendar">
      <div>
        <Calendar onChange={onChange} value={value} className="calendar-container" />
      </div>

      <div className="controls">
        <CalendarItem title="SCSS" suggestion="Try mixin" color="#fc0000" />
        <CalendarItem title="React" suggestion="Lift state up" color="#FCE300" />
        <CalendarItem title="PHP" suggestion="Use isset()" color="#51FC00" />

        <img src={images.plus} alt="plus" className="controls__add" />
      </div>
    </main>
  );
}

export default CalendarPage;
