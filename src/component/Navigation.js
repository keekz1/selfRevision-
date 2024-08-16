// src/components/Navigation.js
import React from 'react';

const Navigation = ({ sections, onSectionChange }) => (
  <nav className="navigation">
    {sections.map((section) => (
      <button
        key={section}
        onClick={() => onSectionChange(section)}
      >
        {section}
      </button>
    ))}
  </nav>
);

export default Navigation;
