import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';

function Carousel() {
  const [reviews, setReviews] = useState([]);
  const [activeReview, setActiveReview] = useState(1);

  useEffect(() => {
    fetch('./carousel.json')
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  function previousReview() {
    activeReview === 1
      ? setActiveReview(reviews.length)
      : setActiveReview((prevState) => prevState - 1);
  }

  function nextReview() {
    return activeReview === reviews.length
      ? setActiveReview(1)
      : setActiveReview((prevState) => prevState + 1);
  }

  return (
    <div className="carousel-list">
      <div className="carousel">
        <ArrowNarrowLeftIcon className="review-arrow" onClick={previousReview} />
        {reviews?.map((review) => (
          <div
            key={review?.id}
            className={`review ${activeReview === review?.id ? 'active' : 'hidden'}`}
          >
            <p>{review?.message}</p>
            <p className="review__author">{review?.author}</p>
          </div>
        ))}

        <ArrowNarrowRightIcon className="review-arrow" onClick={nextReview} />
      </div>
    </div>
  );
}

export default Carousel;
