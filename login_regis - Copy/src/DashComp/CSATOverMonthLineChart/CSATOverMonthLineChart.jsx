import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './CSATOverMonthLineChart.css';

const CSATOverMonthLineChart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/csat_over_month')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        data: data.map(d => d.csat),
        backgroundColor: '#1ABC9C',
        borderColor: '#1ABC9C',
        fill: false
      }
    ]
  };
  return (
    <Paper className="chart-container">
      <Typography variant="h6">Customer Satisfaction Score (CSAT) Over Month</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="csat" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default CSATOverMonthLineChart;
