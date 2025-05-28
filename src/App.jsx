import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';// Remplacement de Clients
import Community from './components/Community';
import AboutUs from './components/AboutUs';
import Solutions from './components/Solutions';
import Contact from './components/Contact'
import Entreprises from './components/Entreprises';
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Entreprises /> {/* Remplacement de Clients */}
                <Community />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;