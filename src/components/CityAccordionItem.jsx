import React from 'react';
import { Link } from 'react-router-dom';
import './CityAccordionItem.css';
import { formatName } from '../utils/formatName';
import packagesList from '../data/packagesList.json'

const CityAccordionItem = ({ city, isExpanded, onToggle }) => {
  return (
    <li className="city-item">
      <div className="city-header" onClick={() => onToggle(city.name)}>
        <h2>{formatName(city.name)}</h2>
        <span className="accordion-icon">{isExpanded ? '−' : '+'}</span>
      </div>

      {isExpanded && (
        <div className="package-dropdown">
          {Object.entries(packagesList).map(([category, packages]) => (
            <div key={category} className="package-category">
              <h3>{formatName(category)}</h3>
              <ul className="package-list">
                {packages.map(pkg => (
                  <li key={pkg.id}>
                    <h4><Link to={`/packages/${pkg.id}`}>{pkg.name}</Link></h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default CityAccordionItem;
