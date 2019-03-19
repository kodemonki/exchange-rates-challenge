import React from "react";
import { NavLink } from "react-router-dom";

export const NavigationBar = props => {
  return (
    <div className="NavigationBar">
      <ol>
        <li>
          <NavLink exact to="/" activeClassName="NavigationBar__item--active">
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="NavigationBar__item--active">
            <h2>About</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exchangerates"
            activeClassName="NavigationBar__item--active"
          >
            <h2>Exchange Rates</h2>
          </NavLink>
        </li>
      </ol>
    </div>
  );
};
