import React from "react";
import { NavLink } from "react-router-dom";

const News = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((element) => (
        <div className="news-items">
          <NavLink to={`/${element.news_category}/${element.news_headline}`}>
            <h1 className="news-headline">{element.news_headline}</h1>
            <p className="news-details">{element.news_details}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default News;
