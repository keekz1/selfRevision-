// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Section from './components/Section';
import NoteEditor from './components/NoteEditor';
import Navigation from './components/Navigation';
import ReactOverview from './components/ReactOverview';
import './App.css';

function App() {
  const [sections, setSections] = useState({
    Python: [],
    Java: [],
    TypeScript: [],
    React: [],
  });
  const [currentSection, setCurrentSection] = useState('Python');

  const addNote = (content) => {
    setSections((prevSections) => ({
      ...prevSections,
      [currentSection]: [...prevSections[currentSection], content],
    }));
  };

  useEffect(() => {
    const storedSections = JSON.parse(localStorage.getItem('sections'));
    if (storedSections) {
      setSections(storedSections);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sections', JSON.stringify(sections));
  }, [sections]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation
            sections={Object.keys(sections)}
            onSectionChange={setCurrentSection}
          />
          <Routes>
            <Route path="/react-overview" element={<ReactOverview />} />
            <Route
              path="/"
              element={
                <>
                  <Section
                    title={currentSection}
                    notes={sections[currentSection]}
                  />
                  <NoteEditor addNote={addNote} />
                </>
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
