// src/PredictionForm.js
import React, { useState } from 'react';
import { getPredictions } from './api';

const PredictionForm = () => {
  const [features, setFeatures] = useState('');
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPredictions(null);

    try {
      // Expecting a comma-separated list of numbers, e.g., "0.5,1.2,3.4,2.1,0.0,1.1"
      const featureArray = features.split(',').map(num => parseFloat(num.trim()));
      const response = await getPredictions([featureArray]);
      setPredictions(response.predictions);
    } catch (err) {
      setError("Error fetching predictions. Check console for details.");
    }
  };

  return (
    <div>
      <h2>Get Safety Risk Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter feature values (comma-separated):
          <input
            type="text"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="0.5, 1.2, 3.4, 2.1, 0.0, 1.1"
          />
        </label>
        <button type="submit">Predict</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {predictions && (
        <div>
          <h3>Prediction Result:</h3>
          <p>{predictions}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;