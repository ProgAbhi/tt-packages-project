import React from 'react';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      {/* Show footer on all pages */}
      <Footer showRegions={true} />
    </>
  );
}

export default Layout;