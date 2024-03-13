import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/LandingPage/LandingPage'; // Corrected file path and component name
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} /> {/* Update component name here */}
          {/* Define more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
