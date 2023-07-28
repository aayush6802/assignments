// src/components/TrainCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrainCard = ({ trainName, departureTime, arrivalTime, platform,trainNumber,seatsAvailable,price,delayedBy }) => {
    console.log(trainName)
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {trainName}
        </Typography>
        <Typography color="textSecondary">
          Train Number: {trainNumber}
        </Typography>
        <Typography color="textSecondary">
          Departure Time: {`${departureTime.Hours}:${departureTime.Minutes}:${departureTime.Seconds}`}
        </Typography>
        <Typography color="textSecondary">
          Seats Available - Sleeper: {seatsAvailable.sleeper}, AC: {seatsAvailable.AC}
        </Typography>
        <Typography color="textSecondary">
          Price - Sleeper: {price.sleeper}, AC: {price.AC}
        </Typography>
        <Typography color="textSecondary">
          Delayed By: {delayedBy} minutes
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrainCard;
