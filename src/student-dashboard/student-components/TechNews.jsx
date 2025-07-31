import React from "react";
// import "./TechNews.css";

const TechNews = ({ data }) => {
  return (
    <div className="tech-news">
      <h3>Trending Tech News</h3>
      <ul className="news-list">
        {data.map((news, index) => (
          <li key={index} className="news-item">
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <h4>{news.title}</h4>
              <p>{news.description}</p>
              <span className="source">{news.source}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechNews;