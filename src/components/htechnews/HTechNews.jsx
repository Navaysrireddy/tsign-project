import React from 'react';
import './HTechNews.css';

const techArticles = [
  {
    title: "AI Revolutionizing Hiring",
    description: "How artificial intelligence is transforming recruitment strategies.",
    date: "July 23, 2025",
    link: "#"
  },
  {
    title: "Blockchain in Education",
    description: "Exploring the role of blockchain in academic credentials.",
    date: "July 20, 2025",
    link: "#"
  },
  {
    title: "Quantum Computing in Universities",
    description: "How quantum computers are being introduced in higher education.",
    date: "July 18, 2025",
    link: "#"
  },
  {
    title: "Cybersecurity Careers",
    description: "Demand for cybersecurity experts rising with AI integration.",
    date: "July 15, 2025",
    link: "#"
  },
  {
    title: "Remote Learning Tools",
    description: "Top 5 platforms helping institutions shift to hybrid education.",
    date: "July 12, 2025",
    link: "#"
  }
];

const HTechNews = () => {
  const scrollingArticles = [...techArticles, ...techArticles];

  return (
    <div className="h-news-wrapper">
      <div className="tech-news-header">
        <h2>Latest Tech News</h2>
      </div>

      <div className="h-news-ticker-container">
        <div className="h-news-ticker">
          {scrollingArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-news-card"
            >
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <small>{article.date}</small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HTechNews;
