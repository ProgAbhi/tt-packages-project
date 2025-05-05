import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import regionsData from '../data/regionsData.json';
import DraggableScrollContainer from '../components/DraggableScrollContainer';
import './Footer.css';

function formatName(name) {
  return name
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function Footer({ showRegions }) {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/region/${regionName}`);
  };

  useEffect(() => {
    try {
      const regionNames = Object.keys(regionsData);
      setRegions(regionNames);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <footer>
      {showRegions && (
        <div className="regions-no-bg">
          <p className="region-heading">List of Regions</p>
          {loading ? (
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>
          ) : error ? (
            <p className="errMsg">Error: {error}</p>
          ) : (
            <DraggableScrollContainer className="region-list">
              {regions.map((regionName) => (
                <div
                  key={regionName}
                  className="region-item"
                  onClick={() => handleRegionClick(regionName)}
                >
                  {formatName(regionName)}
                </div>
              ))}
            </DraggableScrollContainer>
          )}
        </div>
      )}
    </footer>
  );
}

export default Footer;
