import React, { useEffect, useState } from 'react';
import './Clock.scss';

import dayjs from 'dayjs';

function Clock() {
  const [time, setTime] = useState({});

  function clockHandler() {
    let { $y, $M, $D, $H, $m, $W } = dayjs();
    setTime({ year: $y, month: $M, day: $D, hours: $H, minutes: $m, weekDay: $W });
  }

  let min = `${time?.minutes}`;
  let newMinutes = min.length === 1 ? `0${min}` : `${min}`;

  useEffect(() => {
    const interval = setInterval(() => {
      clockHandler();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let monthText = '';
  switch (time?.month) {
    case 1:
      monthText = 'Sausio';
      break;
    case 2:
      monthText = 'Vasario';
      break;
    case 3:
      monthText = 'Kovo';
      break;
    case 4:
      monthText = 'Balandžio';
      break;
    case 5:
      monthText = 'Gegužės';
      break;
    case 6:
      monthText = 'Birželio';
      break;
    case 7:
      monthText = 'Liepos';
      break;
    case 8:
      monthText = 'Rugpjūčio';
      break;
    case 9:
      monthText = 'Rugsėjo';
      break;
    case 10:
      monthText = 'Spalio';
      break;
    case 11:
      monthText = 'Lapkričio';
      break;
    default:
      monthText = 'Gruodžio';
  }

  let dayText = '';
  switch (time?.weekDay) {
    case 1:
      dayText = 'Pirmadienis';
      break;
    case 2:
      dayText = 'Antradienis';
      break;
    case 3:
      dayText = 'Trečiadienis';
      break;
    case 4:
      dayText = 'Ketvirtadienis';
      break;
    case 5:
      dayText = 'Penktadienis';
      break;
    case 6:
      dayText = 'Šeštadienis';
      break;
    default:
      dayText = 'Sekmadienis';
  }

  return (
    <div className="clock">
      <p>{`${time?.hours}:${newMinutes}`}</p>
      <div className="clock__date">
        <p>
          {dayText}, {monthText} {time?.day}, {time?.year}
        </p>
      </div>
    </div>
  );
}

export default Clock;
