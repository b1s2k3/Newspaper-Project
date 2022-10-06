import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const categories = ["Politics", "Business", "Economy", "Tech", "Sports"];
  return (
    <div className="nav-container">
      <h1>NEWS</h1>
      <div className="nav-items">
        <NavLink className="nav-link" to={"/"}>
          Home
        </NavLink>

        {categories.map((category) => (
          <NavLink className="nav-link" to={`/${category}`}>
            {category}
          </NavLink>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Nav;
