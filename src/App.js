// src/App.js
import React from 'react';
import Header from './Header';
import { Container, Grid, Typography } from '@mui/material';
import PredictionForm from './PredictionForm';
import RiskMap from './RiskMap';
import MetricsCard from './MetricsCard'; // We'll create this next

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Safety Risk Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Metrics Cards Row */}
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <MetricsCard title="High-Risk Areas" value="25" />
              <MetricsCard title="Avg. Risk Score" value="0.78" />
              <MetricsCard title="Total Crime Count" value="1,250" />
            </Grid>
          </Grid>
          {/* Prediction Form */}
          <Grid item xs={12}>
            <PredictionForm />
          </Grid>
          {/* Interactive Map */}
          <Grid item xs={12}>
            <RiskMap />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
