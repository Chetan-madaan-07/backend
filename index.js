const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Mock data for stations
const stations = [
  { id: 1, latitude: 12.9716, longitude: 77.5946, chargeConfidenceScore: 0.92 },
  { id: 2, latitude: 28.7041, longitude: 77.1025, chargeConfidenceScore: 0.75 }
];

// API endpoint
app.get('/api/stations', (req, res) => {
  res.json(stations);
});

// Start the server
app.listen(3000, () => {
  console.log('Mock API server running on http://localhost:3000');
});
