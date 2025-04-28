import React from 'react';
import Regions from '../pages/Regions';

function Footer({ showRegions }) {
  return (
    <footer>
      {showRegions && <Regions noBackground={true} />}
    </footer>
  );
}

export default Footer;
