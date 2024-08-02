import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import './NetPromoterScore.css';

const NetPromoterScore = () => {

  const [data, setData] = useState({ nps: 0, promoters: 0, passives: 0, detractors: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/promoter_scores')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Paper className="paper-container">
    <Typography variant="h6">Net Promoter Score</Typography>
    <Typography variant="h4">{data.nps}</Typography>
    <Typography variant="subtitle1">Promoters: {data.promoters}</Typography>
    <Typography variant="subtitle1">Passives: {data.passives}</Typography>
    <Typography variant="subtitle1">Detractors: {data.detractors}</Typography>
  </Paper>
  );
};

export default NetPromoterScore;
