import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CityAccordionItem.css';
import { formatName } from '../utils/formatName';
import packagesList from '../data/packagesList.json'

const CityAccordionItem = ({ city, isExpanded, onToggle }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleCategoryToggle = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const visibleCount = 5;

  return (
    <li className="city-item">
      <div className="city-header" onClick={() => onToggle(city.name)}>
        <h2>{formatName(city.name)}</h2>
        <span className="accordion-icon">{isExpanded ? '−' : '+'}</span>
      </div>

      {isExpanded && (
        <div className="package-dropdown">
          {Object.entries(packagesList).map(([category, packages]) => {
            const isCategoryExpanded = expandedCategories[category];
            const visiblePackages = isCategoryExpanded ? packages : packages.slice(0,visibleCount);

            return (
            <div key={category} className="package-category">
              <h3>{formatName(category)}</h3>
              <ul className="package-list">
                {visiblePackages.map(pkg => (
                  <li key={pkg.id}>
                    <h4><Link to={`/packages/${pkg.id}`}>{pkg.name}</Link></h4>
                  </li>
                ))}
              </ul>

              {packages.length > visibleCount && (
                  <button
                    className="toggle-button"
                    onClick={() => handleCategoryToggle(category)}
                  >
                    {isCategoryExpanded ? 'View Less' : 'View More'}
                  </button>
                  )}
            </div>
          );
          })}
        </div>
      )}
    </li>
  );
};

export default CityAccordionItem;
