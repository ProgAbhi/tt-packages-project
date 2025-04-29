import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import regionsData from '../data/regionsData.json'
import { FaHome } from 'react-icons/fa';
import './CityPage.css'

function formatName(name) {
  return name
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


const CityPage = () => {
  const { id } = useParams(); // id is the region name
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const regionNames = Object.keys(regionsData);

  useEffect(() => {
    try {
      const regionCities = regionsData[id];
      if (regionCities) {
        setCities(regionCities);
        setFilteredCities(regionCities);
      } else {
        setError('Region not found');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(value)
    );
    setFilteredCities(filtered);
  };
  
  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }

  return (
    <div className='detail-container'>
      <button className='back-button' onClick={() => navigate('/')}> <FaHome style={{ marginRight: '8px' }} /> Back to Home Page</button>
      
      <h1 className="section-heading">Region List</h1>

      <div className="region-list-on-citypage">
        {regionNames.map((regionName) => (
          <div
            key={regionName}
            className={`region-name ${regionName === id ? 'active' : ''}`}
            onClick={() => navigate(`/region/${regionName}`)}
          >
            {formatName(regionName)}
          </div>
        ))}
      </div>
      
      <h2 className='city-heading'>List of Cities in {formatName(id)}</h2>
      <input
        type="text"
        placeholder="Search for a city..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchInput"
      />

      <ul className="city-list">
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => (
            <li key={index} className="city-item" onClick={() => {
                if (city && city.name) {
                  navigate(`/city/${city.name.toLowerCase().replace(/\s+/g, '-')}`);
                } else {
                  console.error('City name is undefined:', city);
                }
              }}>
              {formatName(city.name)}</li>
          ))
        ) : (
          <li className="no-city-message">No cities found!</li>
        )}
      </ul>
    </div>
  );
};

export default CityPage;