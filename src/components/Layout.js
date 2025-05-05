import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityPage from '../pages/CityPage';
import PackageDetailPage from '../pages/PackageDetailPage';
import Footer from './Footer';
import './Layout.css'

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="layout-container">
      <main className='flexible'>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/region/:id" element={<CityPage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} />
        </Routes>
      </main>

      <Footer showRegions={isHomePage} />
    </div>
  );
}

export default Layout;
