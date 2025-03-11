// src/RiskMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Paper, Typography } from '@mui/material';
import HeatmapLayer from './HeatmapLayer';

// Sample data: Each point is [latitude, longitude, intensity]
const samplePoints = [
  [41.8781, -87.6298, 0.8],
  [41.85, -87.65, 0.6],
  [41.79, -87.63, 0.9],
];

const heatmapOptions = {
  radius: 25,
  blur: 15,
  max: 1.0,
};

const RiskMap = () => {
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Interactive Safety Heatmap
      </Typography>
      <div style={{ height: '600px', width: '100%' }}>
        <MapContainer center={[41.8781, -87.6298]} zoom={12} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HeatmapLayer points={samplePoints} options={heatmapOptions} />
        </MapContainer>
      </div>
    </Paper>
  );
};

export default RiskMap;
