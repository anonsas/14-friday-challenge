import React from 'react';
import './Fe.scss';

import { Accordion, Carousel } from '../../components/index';

function Fe() {
  return (
    <>
      <main className="fe">
        <p className="fe__text">
          This Page is used to store useful Front-end components that can be reused later
          on in future projects.. Style can be change by preference.
        </p>

        <div className="spinner">
          <p>LOADING</p>
        </div>

        <Accordion />
        <Carousel />

        <div className="theme">
          <button className="theme__btn">Select THEME:</button>
        </div>
      </main>
    </>
  );
}

export default Fe;
