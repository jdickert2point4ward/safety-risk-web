// src/PredictionForm.js
import React, { useState } from 'react';
import { getPredictions } from './api';
import {
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Grid,
} from '@mui/material';

const PredictionForm = () => {
  const [features, setFeatures] = useState('');
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPredictions(null);
    setLoading(true);
    try {
      const featureArray = features.split(',').map((num) => parseFloat(num.trim()));
      const response = await getPredictions([featureArray]);
      setPredictions(response.predictions);
    } catch (err) {
      setError('Error fetching predictions. Check console for details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: 'white' }}>
      <Typography variant="h5" gutterBottom>
        Get Safety Risk Prediction
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter feature values (comma-separated)"
              placeholder="0.5, 1.2, 3.4, 2.1, 0.0, 1.1"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={loading}
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Predict'}
            </Button>
          </Grid>
        </Grid>
      </form>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {predictions && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Prediction Result:</Typography>
          <Typography variant="body1">{predictions}</Typography>
        </div>
      )}
    </Paper>
  );
};

export default PredictionForm;
