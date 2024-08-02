import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import './AverageResponseTime.css';

const AverageResponseTime =()=> {
  const[data,setData] = useState({avgResponseTime: '', lastMonthResponseTime: '' })
  useEffect(() => {
    fetch('http://localhost:5000/api/response_times')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
 
 
 
  return (
    <Paper className="paper-container">
      <Typography variant="h6">Average Response Time</Typography>
      <Typography variant="h4">{data.avgResponseTime}</Typography>
      <Typography variant="subtitle1">Last Month: {data.lastMonthResponseTime}</Typography>
    </Paper>
  );
};

export default AverageResponseTime;
