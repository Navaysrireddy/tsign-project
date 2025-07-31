import React, { useState, useEffect } from 'react';
import { 
  FiTrendingUp, 
  FiClock, 
  FiBookmark, 
//   FiShare2,
//   FiSearch,
  FiExternalLink
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import './TechNews.css';
import Sidebar from '../sidebar/Sidebar';


const TechNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarked, setBookmarked] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample news data (in a real app, you'd fetch this from an API)
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      // Simulate API fetch
      setTimeout(() => {
        setNews([
          {
            id: 1,
            title: 'Quantum Computing Breakthrough Could Revolutionize Encryption',
            summary: 'Researchers have made significant progress in quantum computing that could render current encryption methods obsolete within a decade.',
            source: 'Tech Journal',
            date: '2023-11-15',
            category: 'emerging-tech',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?quantum'
          },
          {
            id: 2,
            title: 'Apple Announces New AI-Powered Features in Latest iOS Update',
            summary: 'The new update includes on-device AI processing for enhanced privacy and performance across Apple devices.',
            source: 'Apple Insider',
            date: '2023-11-14',
            category: 'mobile',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?apple'
          },
          {
            id: 3,
            title: 'The Rise of Low-Code Platforms in Enterprise Software Development',
            summary: 'Businesses are increasingly adopting low-code solutions to accelerate digital transformation initiatives.',
            source: 'Dev Today',
            date: '2023-11-13',
            category: 'development',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?coding'
          },
          {
            id: 4,
            title: 'EU Passes New Regulations on AI Ethics and Transparency',
            summary: 'The legislation will require companies to disclose when AI is being used and provide explanations for algorithmic decisions.',
            source: 'Policy Tech',
            date: '2023-11-12',
            category: 'policy',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?government'
          },
          {
            id: 5,
            title: 'Microsoft Unveils New Copilot Features for Developers',
            summary: 'The AI-assisted coding tool now supports more languages and integrates with additional IDEs.',
            source: 'Code Weekly',
            date: '2023-11-11',
            category: 'development',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?microsoft'
          },
          {
            id: 6,
            title: 'The Future of Remote Work: VR Office Environments',
            summary: 'Companies are experimenting with virtual reality spaces to enhance collaboration for distributed teams.',
            source: 'Future Tech',
            date: '2023-11-10',
            category: 'emerging-tech',
            url: '#',
            image: 'https://source.unsplash.com/random/400x200/?vr'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchNews();
  }, []);

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('techNewsBookmarks');
    if (savedBookmarks) {
      setBookmarked(JSON.parse(savedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('techNewsBookmarks', JSON.stringify(bookmarked));
  }, [bookmarked]);

  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
        <Sidebar/>
    
    <div className="tech-news-container">
      <div className="news-header">
        <h1>
          <FiTrendingUp /> Tech News
        </h1>
        <p>Stay updated with the latest in technology and innovation</p>
      </div>

      <div className="news-controls">
        <div className="search-container">
          {/* <FiSearch className="search-icon" /> */}
          <input
            type="text"
            placeholder="Search tech news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="categories">
          <button
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button
            className={activeCategory === 'emerging-tech' ? 'active' : ''}
            onClick={() => setActiveCategory('emerging-tech')}
          >
            Emerging Tech
          </button>
          <button
            className={activeCategory === 'mobile' ? 'active' : ''}
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile
          </button>
          <button
            className={activeCategory === 'development' ? 'active' : ''}
            onClick={() => setActiveCategory('development')}
          >
            Development
          </button>
          <button
            className={activeCategory === 'policy' ? 'active' : ''}
            onClick={() => setActiveCategory('policy')}
          >
            Policy
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading tech news...</p>
        </div>
      ) : (
        <div className="news-grid">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="news-card"
              >
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="source">{item.source}</span>
                    <span className="date">
                      <FiClock /> {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-summary">{item.summary}</p>
                  <div className="news-actions">
                    <button 
                      className={`bookmark-btn ${bookmarked.includes(item.id) ? 'bookmarked' : ''}`}
                      onClick={() => toggleBookmark(item.id)}
                    >
                      <FiBookmark />
                      {bookmarked.includes(item.id) ? 'Bookmarked' : 'Bookmark'}
                    </button>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="read-more"
                    >
                      Read more <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-results">
              <p>No tech news found matching your criteria</p>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default TechNews;