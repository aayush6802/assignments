// src/components/TrainDetailsContainer.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import TrainCard from './TrainCard';


const TrainDetailsContainer = ({trains}) => {
    console.log(trains)
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Train Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            {
                [...trains].map((train)=> <TrainCard train = {train}/>)
            }
        </Grid>
      </Grid>
    );
  };

export default TrainDetailsContainer;
