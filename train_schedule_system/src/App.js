// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, Typography } from "@mui/material"
import TrainDetailsContainer from './components/TrainDetailsContainer';
import axios from 'axios'



const App = () => {
  const [trains,setTrains] = useState([])
  const getTrainDeatils = async ()=>{
    try {
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA1NDEwOTEsImNvbXBhbnlOYW1lIjoiQWF5dXNoIFRyYWluIFNlcnZpY2UiLCJjbGllbnRJRCI6ImRkMDBhNGJiLTlkNjYtNGU1Yy05YWI0LWUxYTQwODc2OTA5NCIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIwMDEyMDgwMzEyMCJ9.YuFMpQ1jptzggW8TL3xpHAuDfuUAIyubARVJmmbso0s"; // Replace with the actual bearer token

      const response = await axios.get('http://20.244.56.144/train/trains', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      setTrains(response.data);
      // console.log(trains)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    getTrainDeatils();
  },[])
  useEffect(() => {
    // This will log the updated value of trains whenever it changes.
    console.log(trains);
  }, [trains]); 
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Train Details
      </Typography>
      <TrainDetailsContainer trains = {trains} setTrains = {setTrains} />
    </Container>
  );
};

export default App;
/*
[{"trainName":"Jodhpur Exp","trainNumber":"2344","departureTime":{"Hours":11,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":33,"AC":13},"price":{"sleeper":5453,"AC":5564},"delayedBy":4},{"trainName":"Lucknow Exp","trainNumber":"2347","departureTime":{"Hours":17,"Minutes":33,"Seconds":0},"seatsAvailable":{"sleeper":5,"AC":1},"price":{"sleeper":4006,"AC":5063},"delayedBy":12},{"trainName":"Pune Exp","trainNumber":"2342","departureTime":{"Hours":23,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":14,"AC":9},"delayedBy":17},{"trainName":"Cuttack Exp","trainNumber":"2346","departureTime":{"Hours":12,"Minutes":3,"Seconds":0},"seatsAvailable":{"sleeper":10,"AC":1},"price":{"sleeper":4056,"AC":5103},"delayedBy":6},{"trainName":"Cochin Exp","trainNumber":"2348","departureTime":{"Hours":15,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":2,"AC":4},"delayedBy":11},{"trainName":"Hyderabad Exp","trainNumber":"2341","departureTime":{"Hours":23,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":554,"AC":1854},"delayedBy":5},{"trainName":"Mysore Exp","trainNumber":"2347","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":2,"AC":2},"price":{"sleeper":5430,"AC":5563},"delayedBy":8},{"trainName":"Panjim Exp","trainNumber":"2349","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":2,"AC":1},"price":{"sleeper":1,"AC":2},"delayedBy":9},{"trainName":"Srinagar Exp","trainNumber":"2349","departureTime":{"Hours":14,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":5567,"AC":5654},"delayedBy":10},{"trainName":"Kolkata Exp","trainNumber":"2345","departureTime":{"Hours":20,"Minutes":15,"Seconds":0},"seatsAvailable":{"sleeper":16,"AC":70},"price":{"sleeper":5090,"AC":5190},"delayedBy":14},{"trainName":"Chennai Exp","trainNumber":"2344","departureTime":{"Hours":21,"Minutes":35,"Seconds":0},"seatsAvailable":{"sleeper":3,"AC":1},"price":{"sleeper":2,"AC":5},"delayedBy":15},{"trainName":"Mumbai Exp","trainNumber":"2343","departureTime":{"Hours":22,"Minutes":37,"Seconds":0},"seatsAvailable":{"sleeper":8,"AC":15},"price":{"sleeper":5080,"AC":5180},"delayedBy":16},{"trainName":"Sikkim Exp","trainNumber":"2345","departureTime":{"Hours":11,"Minutes":23,"Seconds":0},"seatsAvailable":{"sleeper":4,"AC":4},"price":{"sleeper":6,"AC":2},"delayedBy":5},{"trainName":"Bokaro Exp","trainNumber":"2347","departureTime":{"Hours":13,"Minutes":32,"Seconds":0},"seatsAvailable":{"sleeper":55,"AC":0},"price":{"sleeper":13,"AC":8},"delayedBy":7},{"trainName":"Amritsar Exp","trainNumber":"2346","departureTime":{"Hours":19,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":15,"AC":10},"price":{"sleeper":15,"AC":5},"delayedBy":13}]
*/