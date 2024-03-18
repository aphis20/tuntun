import React, { useState } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
  // State variables
  const [searchQuery, setSearchQuery] = useState('');
  const [showDoctorSpecialties, setShowDoctorSpecialties] = useState(false);

  // List of doctor specialties (example)
  const doctorSpecialties = ['Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology'];

  // Function to handle changes in search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle onFocus event
  const handleFocus = () => {
    setShowDoctorSpecialties(true);
  };

  // Function to handle onBlur event
  const handleBlur = () => {
    setShowDoctorSpecialties(false);
  };

  return (
    <div className="find-doctor-search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search by doctor's specialty"
        className="find-doctor-search-input"
      />
      {showDoctorSpecialties && (
        <div className="doctor-specialties-list">
          <ul>
            {doctorSpecialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FindDoctorSearch;
