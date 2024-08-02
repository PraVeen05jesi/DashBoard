import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./CustomerSatisfactionPie.css";

const CustomerSatisfactionPie = () => {
  const data = [
    { name: 'Satisfied', value: 75 },
    { name: 'Unsatisfied', value: 25 }
  ];
  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <Paper className="paper-container">
      <Typography variant="h6">Customer Satisfaction (CSAT)</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Typography variant="h4">75%</Typography>
      <Typography variant="subtitle1">Exit %: 25%</Typography>
    </Paper>
  );
};

export default CustomerSatisfactionPie;
