import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import regionsData from '../data/regionsData.json';
import './CityDetailPage.css';

const CityDetailPage = () => {
  const { cityname } = useParams();
  const navigate = useNavigate();

  const allCities = Object.values(regionsData).flat();

  const city = allCities.find(c => 
    c.name.toLowerCase().replace(/\s+/g, '-') === cityname
  );

  if (!city) {
    return <div className="noCity">City not found!</div>;
  }

  return (
    <div className="city-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="city-name">{city.name}</h1>
      
      <p><strong>City ID:</strong> {city.id}</p>

      <div className="city-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. 
        </p>
        <p>
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. 
          Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        </p>
      </div>
    </div>
  );
};

export default CityDetailPage;
