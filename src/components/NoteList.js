// src/components/NoteList.js
import React from 'react';

const NoteList = ({ notes }) => (
  <ul className="note-list">
    {notes.length > 0 ? (
      notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))
    ) : (
      <li>No notes available.</li>
    )}
  </ul>
);

export default NoteList;
