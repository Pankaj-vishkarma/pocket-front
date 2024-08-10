import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 'MN', name: 'My Notes' },
    { id: 'MP', name: 'My personal grp' },
    { id: 'JG', name: 'Javascript grp' },
    { id: 'HG', name: 'HTML grp' },
    { id: 'CN', name: 'CSS Notes' },
    { id: 'SN', name: 'SQL Notes' },
    { id: 'PN', name: 'Python Notes' },
  ]);

  const addNote = () => {
    const newNote = prompt('Enter the name of the new note:');
    if (newNote) {
      setNotes([...notes, { id: newNote.slice(0, 2).toUpperCase(), name: newNote }]);
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Pocket Notes</h2>
        <ul>
          {notes.map(note => (
            <li key={note.id} className="note-item">
              <div className="note-icon" style={{ backgroundColor: getColor(note.id) }}>
                {note.id}
              </div>
              <span>{note.name}</span>
            </li>
          ))}
        </ul>
        <button className="add-note-btn" onClick={addNote}>+</button>
      </div>
      <div className="content">
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
      </div>
    </div>
  );
};

// Helper function to generate colors for note icons
const getColor = (id) => {
  const colors = {
    MN: '#2196f3',
    MP: '#9c27b0',
    JG: '#ff5722',
    HG: '#4caf50',
    CN: '#ff9800',
    SN: '#00bcd4',
    PN: '#e91e63',
  };
  return colors[id] || '#607d8b';
};

export default App;
