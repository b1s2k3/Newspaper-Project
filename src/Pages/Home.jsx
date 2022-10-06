import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import News from "../Components/News";

const Home = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(1);

  const lastNews = currentPage * newsPerPage;
  const firstNews = lastNews - newsPerPage;
  const currentNews = news.slice(firstNews, lastNews);
  const totalNews = news.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="home-page">
      <div className="pagination-container">
        <div className="pagination-items">
          <ul>
            {currentNews.map((element) => {
              return (
                <div>
                  <NavLink
                    to={`/${element.news_category}/${element.news_headline}`}
                  >
                    <img
                      className="pagination-img"
                      src={element.news_img_url}
                      alt="news-img"
                      width="60%"
                      height="400"
                    />
                    <h1 className="pagination-news-headline">
                      {element.news_headline}
                    </h1>
                  </NavLink>
                </div>
              );
            })}
          </ul>
          <ul className="page-num">
            {pageNumbers.map((number) => (
              <li className="pag-button" key={number}>
                <a onMouseOver={() => paginate(number)} href="!#">
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <News news={news} />
    </div>
  );
};

export default Home;
