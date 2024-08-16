// src/components/Section.js
import React from 'react';
import NoteList from './NoteList';

const Section = ({ title, notes }) => (
  <div className="section">
    <h2>{title}</h2>
    <NoteList notes={notes} />
  </div>
);

export default Section;
