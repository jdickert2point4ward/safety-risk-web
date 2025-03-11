// src/PerformanceChart.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data (replace with your actual metrics if available)
const data = [
  { model: 'Logistic Regression', accuracy: 0.20, recall: 1.00 },
  { model: 'Random Forest', accuracy: 0.998, recall: 1.00 },
  { model: 'XGBoost', accuracy: 1.000, recall: 1.00 }
];

const PerformanceChart = () => {
  return (
    <Paper style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Model Performance Comparison
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="model" />
          <YAxis domain={[0, 1]} tickFormatter={(tick) => tick.toFixed(2)} />
          <Tooltip formatter={(value) => value.toFixed(2)} />
          <Legend />
          <Bar dataKey="accuracy" fill="#1976d2" name="Accuracy" />
          <Bar dataKey="recall" fill="#dc004e" name="Recall (High-Risk)" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default PerformanceChart;