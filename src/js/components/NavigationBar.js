import React from "react";
import { NavLink } from "react-router-dom";

export const NavigationBar = props => {
  return (
    <div>
      <div className="NavigationBar">
        <ol>
          <li>
            <NavLink exact to="/" activeClassName="NavigationBar__item--active">
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="NavigationBar__item--active">
              <h3>About</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exchange-rates"
              activeClassName="NavigationBar__item--active"
            >
              <h3>Exchange Rates</h3>
            </NavLink>
          </li>
        </ol>
      </div>
    </div>
  );
};
