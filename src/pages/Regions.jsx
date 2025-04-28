
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import regionsData from '../data/regionsData.json'
import './Regions.css'

function formatName(name) {
  return name
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const Regions = ({ noBackground }) => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  
  
  // Function to handle Regions clicks

  const handleRegionClick = (regionName)=>{
    navigate(`/region/${regionName}`)
  }
 
  useEffect(() => {
    try {
      const regionNames = Object.keys(regionsData);
      setRegions(regionNames);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [])

  if (loading) {

    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</p>;
  }
  
  if (error) {
    return <p className='errMsg'>Error: {error}</p>;
  }

    return (
    <div className={noBackground ? 'regions-no-bg' : 'app-container'}>
        <p className='region-heading'>Regions</p>
        <div className = "region-list">
        {regions.map((regionName) => (
            <div
            key={regionName}
            className="region-item"
            onClick={() => handleRegionClick(regionName)}
          >
            {formatName(regionName)}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Regions;