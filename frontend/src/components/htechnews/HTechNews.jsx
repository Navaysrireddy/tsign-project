import React from "react";
 
const techArticles = [
  {
    title: "AI Revolutionizing Hiring",
    description: "How artificial intelligence is transforming recruitment strategies.",
    date: "July 23, 2025",
    link: "#",
  },
  {
    title: "Blockchain in Education",
    description: "Exploring the role of blockchain in academic credentials.",
    date: "July 20, 2025",
    link: "#",
  },
  {
    title: "Quantum Computing in Universities",
    description: "How quantum computers are being introduced in higher education.",
    date: "July 18, 2025",
    link: "#",
  },
  {
    title: "Cybersecurity Careers",
    description: "Demand for cybersecurity experts rising with AI integration.",
    date: "July 15, 2025",
    link: "#",
  },
  {
    title: "Remote Learning Tools",
    description: "Top 5 platforms helping institutions shift to hybrid education.",
    date: "July 12, 2025",
    link: "#",
  },
];
 
const HTechNews = () => {
  const scrollingArticles = [...techArticles, ...techArticles];
 
  return (
    <div className="w-full h-full relative">
      {/* Header */}
      <div className="bg-[rgba(28,40,167,0.6)] py-2 rounded-md text-center mb-3">
        <h2 className="text-white text-lg font-semibold m-0">
          Latest Tech News
        </h2>
      </div>
 
      {/* News ticker container */}
      <div className="h-[500px] overflow-hidden relative w-full px-4">
        <div className="flex flex-col animate-scroll-up hover:[animation-play-state:paused]">
          {scrollingArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 mb-3 rounded-md text-black no-underline transition-colors hover:bg-[#f3f3f3]"
            >
              <h4 className="m-0 mb-2 text-[1.1rem] text-[rgb(49,49,146)] font-semibold">
                {article.title}
              </h4>
              <p className="m-0 mb-1 text-[0.95rem]">{article.description}</p>
              <small className="text-[#a04141]">{article.date}</small>
            </a>
          ))}
        </div>
      </div>
 
      {/* Custom animation */}
      <style>
        {`
          @keyframes scroll-up {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-up {
            animation: scroll-up 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};
 
export default HTechNews;
 
 