import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Section from './component/Section';
import NoteEditor from './component/NoteEditor';
import Navigation from './component/Navigation';
import ReactOverview from './component/ReactOverview';

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
