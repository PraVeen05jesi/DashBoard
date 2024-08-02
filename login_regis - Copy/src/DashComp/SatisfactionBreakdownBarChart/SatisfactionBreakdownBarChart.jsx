import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SatisfactionBreakdownBarChart.css';

const SatisfactionBreakdownBarChart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/satisfaction_breakdown')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const chartData = {
    labels: data.map(d => d.category),
    datasets: [
      {
        data: data.map(d => d.percentage),
        backgroundColor: '#3498DB'
      }
    ]
  };
  return (
    <Paper className="chart-container">
      <Typography variant="h6">Customer Satisfaction Breakdown with Percentage</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SatisfactionBreakdownBarChart;
