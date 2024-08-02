import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import './CustomerSatisfactionScore.css';

const CustomerSatisfactionScore = () => {
  const [data, setData] = useState({ current: 0, lastMonth: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/satisfaction_scores')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <Paper className="paper-container">
    <Typography variant="h6">Customer Satisfaction Score</Typography>
    <Typography variant="h4">{data.current}%</Typography>
    <Typography variant="subtitle1">Last Month: {data.lastMonth}%</Typography>
  </Paper>
  );
};

export default CustomerSatisfactionScore;
