import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout'; // Layout handles all routing and footer

function App() {
  return (
    <Router basename="/tt-cities-project">
      <Layout />
    </Router>
  );
}

export default App;
