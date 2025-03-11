// src/MetricsCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MetricsCard = ({ title, value }) => {
  return (
    <Card sx={{ minWidth: 150, m: 1 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
