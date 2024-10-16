// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveTV from './pages/LiveTV';
import OnDemand from './pages/OnDemand';
import Settings from './pages/Settings';
import './App.css';

// Main App component that includes routing and layout
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationMenu />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livetv" element={<LiveTV />} />
            <Route path="/ondemand" element={<OnDemand />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
