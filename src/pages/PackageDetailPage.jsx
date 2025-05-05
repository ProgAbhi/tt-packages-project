import React from 'react';
import { useParams } from 'react-router-dom';
import packagesData from '../data/packagesData.json';
import { PackageCard } from '../components/PackageCard';

const PackageDetailPage = () => {
  const { id } = useParams();
  const packageId = parseInt(id);

  const pkg = packagesData.find(p => p.id === packageId);

  if (!pkg) return <h2>Package not found</h2>;

  return (
  <PackageCard
  url={pkg.url}
  image={pkg.image}
  title={pkg.name}
  days={pkg.days}
  nights={pkg.nights}
  rating={pkg.rating}
  discountedPrices={pkg.discountedPrices}
  originalPrices={pkg.originalPrices}
/>
  );
};

export default PackageDetailPage;
