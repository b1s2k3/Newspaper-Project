import React from "react";
import { NavLink, useParams } from "react-router-dom";

const NavSections = ({ news }) => {
  const { category } = useParams();
  return (
    <div className="nav-sections-container">
      {news
        .filter((element) => element.news_category === category.toLowerCase())
        .map((element) => {
          return (
            <div>
              <div className="nav-sections-items">
                <h1>{element.news_headline}</h1>
                <p>{element.news_details}</p>
              </div>
              <NavLink
                to={`/${element.news_category}/${element.news_headline}`}
              >
                <h6 className="show-more">Show more..</h6>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};

export default NavSections;
