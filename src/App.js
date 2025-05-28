import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Layout from './components/Layout'; // Layout handles all routing and footer

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <HomePage /> </Layout>}/>
      <Route path="/region/:id" element={<Layout> <CityPage /> </Layout>}/>
    </Routes>
  );
}

export default App;
