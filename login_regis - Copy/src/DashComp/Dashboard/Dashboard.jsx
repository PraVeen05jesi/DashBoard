import React from 'react';
import { Grid } from '@mui/material';


import './Dashboard.css';
import ProductName from '../ProductName/ProductName';
import AverageResponseTime from '../AverageResponseTime/AverageResponseTime';
import CustomerSatisfactionScore from '../CustomerSatisfactionScore/CustomerSatisfactionScore';
import CustomerEffortScore from '../CustomerEffortScore/CustomerEffortScore';
import NetPromoterScore from '../NetPromoterScore/NetPromoterScore';
import CustomerSatisfactionPie from '../CustomerSatisfactionPie/CustomerSatisfactionPie';
import SatisfactionBreakdownBarChart from '../SatisfactionBreakdownBarChart/SatisfactionBreakdownBarChart';
import AverageResponseTimeLineChart from '../AverageResponseTimeLineChart/AverageResponseTimeLineChart';
import CSATOverMonthLineChart from '../CSATOverMonthLineChart/CSATOverMonthLineChart';

const Dashboard = () => {
  // Mock data to simulate the real-time data
  const data = {
    avgResponseTime: "11:24 hr",
    lastMonthResponseTime: "8:11 hr",
    csat: {
      current: 65,
      lastMonth: 73
    },
    nps: 59,
    promoters: 67.76,
    passives: 20.43,
    detractors: 11.81,
    ces: 75.94,
    satisfactionBreakdown: [
      { category: "Category 1", percentage: 40 },
      { category: "Category 2", percentage: 30 },
      { category: "Category 3", percentage: 20 },
      { category: "Category 4", percentage: 10 }
    ],
    averageResponseTimeOverMonth: [
      { month: "Jan", responseTime: 20 },
      { month: "Feb", responseTime: 18 },
      { month: "Mar", responseTime: 25 },
      { month: "Apr", responseTime: 22 },
      { month: "May", responseTime: 19 },
      { month: "Jun", responseTime: 21 }
    ],
    csatOverMonth: [
      { month: "Jan", csat: 70 },
      { month: "Feb", csat: 72 },
      { month: "Mar", csat: 75 },
      { month: "Apr", csat: 65 },
      { month: "May", csat: 80 },
      { month: "Jun", csat: 60 }
    ]
  };

  return (
    <Grid container spacing={3} className="dashboard-container">
      <Grid item xs={12}>
        <ProductName />
      </Grid>
      <Grid item xs={12} md={3}>
        <AverageResponseTime 
          avgResponseTime={data.avgResponseTime}
          lastMonthResponseTime={data.lastMonthResponseTime}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomerSatisfactionScore csat={data.csat} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomerEffortScore ces={data.ces} />
      </Grid>
      <Grid item xs={12} md={3}>
        <NetPromoterScore 
          nps={data.nps}
          promoters={data.promoters}
          passives={data.passives}
          detractors={data.detractors}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomerSatisfactionPie />
      </Grid>
      <Grid item xs={12} md={6}>
        <SatisfactionBreakdownBarChart data={data.satisfactionBreakdown} />
      </Grid>
      <Grid item xs={12}>
        <AverageResponseTimeLineChart data={data.averageResponseTimeOverMonth} />
      </Grid>
      <Grid item xs={12}>
        <CSATOverMonthLineChart data={data.csatOverMonth} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
