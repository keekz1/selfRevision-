// src/components/NoteEditor.js
import React, { useState } from 'react';

const NoteEditor = ({ addNote }) => {//This is the name of the component.
  //This is destructuring the addNote prop, which is passed into the NoteEditor component. addNote is a function that the component can call to add a note.
  const [content, setContent] = useState(''); // 

  // Handle content change in the textarea
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      addNote(content); 
      setContent('');
    }
  };

  return (
    <div className="note-editor">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="Write your note here..."
        />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
};

export default NoteEditor;
