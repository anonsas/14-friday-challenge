import React from 'react';
import './Navigation.scss';
import NavItem from './NavItem';
import { images } from '../../constants/index';

function Navigation() {
  return (
    <nav className="nav">
      <img src={images.logo} alt="logo" className="nav-logo" />

      <div className="line-break"></div>

      <ul className="nav__list">
        <NavItem icon={images.home} route="/" altText="home" name="Home" />
        <NavItem
          icon={images.calendar}
          route="/calendar"
          altText="calendar"
          name="Calendar"
        />
        <NavItem icon={images.fe} route="/fe" altText="front end" name="FE" />
        <NavItem icon={images.games} route="/games" altText="games" name="Games" />
      </ul>
    </nav>
  );
}

export default Navigation;
