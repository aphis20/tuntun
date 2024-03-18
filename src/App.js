import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import AppointmentFormIC from './Components/AppointmentFormIC/AppointmentFormIC';
import DoctorCardIC from './Components/DoctorCardIC/DoctorCardIC';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DoctorCardIC" element={<DoctorCardIC />} />
          <Route path="/AppointmentFormIC" element={<AppointmentFormIC />} />
          {/* Define more routes here if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
