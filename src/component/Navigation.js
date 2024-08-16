// Navigation Component (Navigation.js)
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation({ sections, onSectionChange }) {
  const navigate = useNavigate(); // Use the navigate function

  return (
    <nav>
      {sections.map((section) => (
        <button key={section} onClick={() => onSectionChange(section)}>
          {section}
        </button>
      ))}
      <button onClick={() => navigate('/react-overview')}>
        React Overview
      </button>
    </nav>
  );
}

export default Navigation;
