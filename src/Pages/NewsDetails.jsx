import React from "react";
import { useParams } from "react-router-dom";

const NewsDetails = ({ news }) => {
  const { category } = useParams();
  const { title } = useParams();

  return (
    <div className="news-details-container">
      {news
        .filter(
          (element) =>
            element.news_category === category &&
            element.news_headline === title
        )
        .map((element) => (
          <div className="news-details-items">
            <h1>{element.news_headline}</h1>
            <img
              src={element.news_img_url}
              alt="news-img"
              width="60%"
              height="400"
            />

            <h6>By {element.author}</h6>
            <p>{element.news_details}</p>
          </div>
        ))}
    </div>
  );
};

export default NewsDetails;
