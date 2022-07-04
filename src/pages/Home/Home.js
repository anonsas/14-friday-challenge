import React from 'react';
import './Home.scss';

import { images } from '../../constants/index';
import { Clock } from '../../components/index';

function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <Clock />

        <div className="header__introduce">
          <h1>Good morning, [Jūsų vardas]</h1>
        </div>
      </header>

      <div className="home__image">
        <picture>
          <source media="(min-width: 36em)" srcSet={images.workplaceDesktop} />
          <img src={images.workplacePhone} alt="workplace" />
        </picture>
      </div>

      <div className="home__quote">
        <p>“First, solve the problem. Then, write the code.” - John Johnson</p>
      </div>
    </main>
  );
}

export default Home;
