import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import regionsData from '../data/regionsData.json'
import { FaHome } from 'react-icons/fa';
import DraggableScrollContainer from "../components/DraggableScrollContainer.jsx";
import CityAccordionItem from "../components/CityAccordionItem.jsx";
import { formatName } from "../utils/formatName.js";
import './CityPage.css'

const CityPage = () => {
  const { id } = useParams(); // id is the region name
  const [cities, setCities] = useState([]);
  const [expandedCity, setExpandedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const regionNames = Object.keys(regionsData);

  useEffect(() => {
    try {
      const regionCities = regionsData[id];
      if (regionCities) {
        setCities(regionCities);
      } else {
        setError('Region not found');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const toggleCity = (cityName) => {
    setExpandedCity(expandedCity === cityName ? null : cityName);
  };
  
  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }

  return (
    <div className='city-container'>
      <button className='back-button' onClick={() => navigate('/')}> <FaHome style={{ marginRight: '8px' }} /></button>
      
      <h1 className="section-heading">Region List</h1>

      <DraggableScrollContainer className="region-list">
        {regionNames.map((regionName) => (
          <div
            key={regionName}
            className={`region-name ${regionName === id ? 'active' : ''}`}
            onClick={() => navigate(`/region/${regionName}`)}
          >
            {formatName(regionName)}
          </div>
        ))}
        </DraggableScrollContainer>
      
      <h1 className='city-heading'>Tourism in {formatName(id)}</h1>

      <ul className="city-list">
        {cities.length > 0 ? (
          cities.map((city, index) => (
            <CityAccordionItem key={index} city={city} isExpanded = {expandedCity === city.name} onToggle = {toggleCity} />
          ))
        ) : (
          <li className="no-city-message">No cities found!</li>
        )}
      </ul>
    </div>
  );
};

export default CityPage;