import React, { useState, useEffect } from 'react';
import './Accordion.scss';

import { ArrowNarrowDownIcon } from '@heroicons/react/solid';

function Accordion() {
  const [accordionList, setAccordionList] = useState([]);
  const [isOpen, setIsOpen] = useState(0);

  useEffect(() => {
    fetch('./accordion.json')
      .then((response) => response.json())
      .then((data) => setAccordionList(data));
  }, []);

  function openAccordionHandler(id) {
    return id === isOpen ? setIsOpen(0) : setIsOpen(id);
  }

  return (
    <div className="accordion-list">
      {accordionList?.map((accordion) => (
        <div
          key={accordion?.id}
          className={`accordion ${accordion?.id === isOpen ? 'open' : ''}`}
        >
          <div
            className="accordion__question"
            onClick={() => openAccordionHandler(accordion?.id)}
          >
            <div className="arrow-container">
              <ArrowNarrowDownIcon className="arrow-img" />
            </div>
            <h3>{accordion?.question}</h3>
          </div>

          <div className="accordion__answer">
            <p>{accordion?.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
