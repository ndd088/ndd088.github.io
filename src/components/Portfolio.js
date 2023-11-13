import React, { useState } from 'react';
import '../assets/styles/App.css';
import imageOne from '../assets/images/portfolio-cards-1.png';
import imageTwo from '../assets/images/portfolio-cards-2.png';

const Portfolio = () => {
  const initialPortfolioItems = [
    { title: 'Project 1', category: 'Web Development', image: imageOne, description: 'Description for Project 1', link: 'https://project1.com' },
    { title: 'Project 2', category: 'Mobile App', image: imageTwo, description: 'Description for Project 2', link: 'https://project2.com' },
    { title: 'Project 3', category: 'Design', image: imageOne, description: 'Description for Project 3', link: 'https://project3.com' },
    { title: 'Project 4', category: 'Web Development', image: imageTwo, description: 'Description for Project 4', link: 'https://project4.com' },
  ];

  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);

  const filterPortfolio = (category) => {
    if (category === 'All') {
      setPortfolioItems(initialPortfolioItems);
    } else {
      const filteredItems = initialPortfolioItems.filter((item) => item.category === category);
      setPortfolioItems(filteredItems);
    }
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-categories">
        <button onClick={() => filterPortfolio('All')}>All</button>
        <button onClick={() => filterPortfolio('Web Development')}>/ Web Development</button>
        <button onClick={() => filterPortfolio('Mobile App')}>/ Mobile App</button>
        <button onClick={() => filterPortfolio('Design')}>/ Design</button>
      </div>
      <div className="portfolio-items">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;