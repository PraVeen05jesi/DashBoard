import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import './CustomerEffortScore.css';

const CustomerEffortScore = () => {

  const [ces, setCes] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/effort_scores')
      .then(response => response.json())
      .then(data => setCes(data.ces));
  }, []);

  return (
    <Paper className="paper-container">
      <Typography variant="h6">Customer Effort Score (CES)</Typography>
      <Typography variant="h4">{ces}%</Typography>
    </Paper>
  );
};

export default CustomerEffortScore;
