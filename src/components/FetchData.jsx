import React, { useEffect, useState } from "react";


const FetchData = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://cms.traveltriangle.com/city_names_and_faqs/uttar%20pradesh`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        
        const data = await response.json();
        
        // Check the actual response structure first
        console.log("API Response:", data);
        
        // Adjust this based on actual API structure
        if (data.cities && Array.isArray(data.cities)) {
          setCities(data.cities);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  if (loading) return <div className="loading">Loading cities...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (cities.length === 0) return <div>No cities found</div>;

  return (
    <div className="city-list">
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id || city.name}>
            {city.id},{city.name}
            {/* Add other city details if available */}
            {/* {city.description && <p>{city.description}</p>} */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default FetchData