import React from "react";
import { StyledNav } from "../styles";

//Import React Router Dom
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a className="logo" href="#">
          <span>C</span>apture
        </a>
      </h1>
      <ul>
        <li>
          <NavLink to="/">1. About Us</NavLink>
        </li>

        <li>
          <NavLink to="/work">2. Our Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">3. Contact us</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
