// src/App.js
import React from 'react';
import './App.css';
import PredictionForm from './PredictionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Safety Risk Classifier Dashboard</h1>
      </header>
      <main>
        <PredictionForm />
      </main>
    </div>
  );
}

export default App;
