import React from "react";
import { Paper, Typography } from '@mui/material';
import './ProductName.css';

const ProductName = () => {
    return (
      <Paper className="paper-container">
        <Typography variant="h6">Product Name</Typography>
        <Typography variant="h4">Product 01</Typography>
      </Paper>
    );
  };
  
  export default ProductName;