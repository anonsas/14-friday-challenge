import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ icon, route, altText, name }) {
  return (
    <li className="list__item">
      <NavLink to={route} className="list__item--link">
        <img src={icon} alt={altText} />
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
